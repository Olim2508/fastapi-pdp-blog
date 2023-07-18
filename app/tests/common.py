import random
import string
from typing import Dict

from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

import crud
import models
import schemas
from core.config import config


def random_lower_string() -> str:
    return "".join(random.choices(string.ascii_lowercase, k=32))


def random_email() -> str:
    return f"{random_lower_string()}@{random_lower_string()}.com"


def create_random_category(db: Session) -> models.Category:
    title = random_lower_string()
    category_in = schemas.CategoryCreate(title=title)
    return crud.category.create(db, obj_in=category_in)


def create_random_categories(db: Session):
    for i in range(3):
        title = random_lower_string()
        category_in = schemas.CategoryCreate(title=title)
        crud.category.create(db, obj_in=category_in)


def create_test_user(db: Session):
    user_in = schemas.UserCreate(email="mail@test.com", password="123456")
    return crud.user.create(db, obj_in=user_in)


def user_authentication_headers(*, client: TestClient, email: str, password: str) -> Dict[str, str]:
    data = {"username": email, "password": password}

    r = client.post(f"{config.API_MAIN_PREFIX}/login/", data=data)
    response = r.json()
    auth_token = response["access_token"]
    headers = {"Authorization": f"Bearer {auth_token}"}
    return headers


def authentication_token_from_email(*, client: TestClient, email: str, db: Session) -> Dict[str, str]:
    """
    Return a valid token for the user with given email.

    If the user doesn't exist it is created first.
    """
    password = random_lower_string()
    user = crud.user.get_by_email(db, email=email)
    if not user:
        user_in_create = schemas.UserCreate(email=email, password=password)
        user = crud.user.create(db, obj_in=user_in_create)
    else:
        user_in_update = schemas.UserUpdate(password=password)
        user = crud.user.update(db, db_obj=user, obj_in=user_in_update)

    return user_authentication_headers(client=client, email=email, password=password)
