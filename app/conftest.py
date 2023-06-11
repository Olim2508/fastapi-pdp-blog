import pytest
from sqlalchemy import create_engine
from sqlalchemy_utils import create_database, database_exists

# from sqlalchemy.orm import sessionmaker
from starlette.testclient import TestClient

from db import Base
from db.session import DATABASE_TEST_URL, SessionLocal
from endpoints.utils import save_file_to_aws
from services.utils import get_db

# TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
#
# Base.metadata.create_all(bind=engine)


@pytest.fixture(scope="session")
def db_engine():
    engine = create_engine(DATABASE_TEST_URL)
    if not database_exists(engine.url):
        create_database(engine.url)

    Base.metadata.create_all(bind=engine)
    yield engine
    Base.metadata.drop_all(bind=engine)


@pytest.fixture(scope="function")
def db(db_engine):
    from .app import app

    connection = db_engine.connect()

    # begin a non-ORM transaction
    connection.begin()

    # bind an individual Session to the connection
    db = SessionLocal(bind=connection)
    # db = Session(db_engine)
    app.dependency_overrides[get_db] = lambda: db

    yield db

    db.rollback()
    connection.close()


@pytest.fixture(scope="function")
def client(db):
    from .app import app

    # client = TestClient(app)
    # client.headers.update({'Authorization': auth_header})
    # Base.metadata.create_all(bind=engine)
    # yield client  # testing happens here
    # Base.metadata.drop_all(bind=engine)

    app.dependency_overrides[get_db] = lambda: db

    def override_save_file_to_aws():
        return lambda x: "https://{self.s3_bucket}.s3.amazonaws.com/path"

    app.dependency_overrides[save_file_to_aws] = override_save_file_to_aws

    with TestClient(app) as c:
        # c.headers.update({'Authorization': auth_header})
        yield c


# app.dependency_overrides[get_db] = override_get_db
