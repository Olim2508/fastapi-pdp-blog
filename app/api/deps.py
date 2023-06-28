from typing import Generator

from fastapi import Depends, HTTPException, status
from db.db_conf import SessionLocal


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


