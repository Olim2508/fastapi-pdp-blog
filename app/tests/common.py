import random
import string

from sqlalchemy.orm import Session

import crud
import models
import schemas


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
