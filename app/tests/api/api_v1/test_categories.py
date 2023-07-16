from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from core.config import config


def test_create_category(
    client: TestClient, db: Session
) -> None:
    data = {"title": "Foo"}
    response = client.post(
        f"{config.API_MAIN_PREFIX}/category/", json=data,
    )
    assert response.status_code == 200
    content = response.json()
    assert content["title"] == data["title"]
    assert "id" in content
