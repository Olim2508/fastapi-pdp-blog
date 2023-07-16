from typing import Dict, Generator

import pytest
from fastapi.testclient import TestClient

from app.db.session import SessionLocal
from app.app import app


@pytest.fixture(scope="session")
def db() -> Generator:
    yield SessionLocal()


@pytest.fixture(scope="module")
def client() -> Generator:
    with TestClient(app) as c:
        yield c


# @pytest.fixture(scope="module")
# def normal_user_token_headers(client: TestClient, db: Session) -> Dict[str, str]:
#     return authentication_token_from_email(
#         client=client, email=config.EMAIL_TEST_USER, db=db
#     )