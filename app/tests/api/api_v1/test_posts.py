from typing import Dict

from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from core.config import config
from tests.common import create_test_category, create_test_post, create_test_posts


def test_create_post(client: TestClient, db: Session, normal_user_token_headers: Dict[str, str]) -> None:
    category = create_test_category(db)
    data = {
        "title": "Foo",
        "content": "Test content",
        "category": category.id,
    }
    response = client.post(
        f"{config.API_MAIN_PREFIX}/post/",
        json=data,
        headers=normal_user_token_headers,
    )
    assert response.status_code == 200
    content = response.json()
    assert content["title"] == data["title"]
    assert content["category_id"] == category.id
    assert "id" in content


def test_read_posts(client: TestClient, db: Session) -> None:
    create_test_posts(db)
    response = client.get(f"{config.API_MAIN_PREFIX}/post/")
    assert response.status_code == 200
    content = response.json()
    assert content["count"] == 3
    response = client.get(f"{config.API_MAIN_PREFIX}/post/?limit=1")
    content = response.json()
    assert content["count"] == 1


def test_get_post(client: TestClient, db: Session) -> None:
    post = create_test_post(db)
    response = client.get(f"{config.API_MAIN_PREFIX}/post/{post.id}")
    assert response.status_code == 200
    content = response.json()
    print(content)
    assert content["title"] == post.title
    assert content["id"] == post.id
