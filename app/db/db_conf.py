import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

load_dotenv('.env')

DATABASE_URL = "postgresql+psycopg2://{user}:{password}@{host}:{port}/{db}".format(
    user=os.environ["POSTGRES_USER"],
    password=os.environ["POSTGRES_PASSWORD"],
    host=os.environ["POSTGRES_HOST"],
    port=os.environ["POSTGRES_PORT"],
    db=os.environ["POSTGRES_DB"],
)

SQLALCHEMY_DATABASE_URL = DATABASE_URL

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
)

db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

