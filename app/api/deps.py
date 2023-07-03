from typing import Generator

from fastapi import Depends, HTTPException, status

from db.db_conf import SessionLocal
from fastapi.security import OAuth2PasswordBearer
from core.config import config
from pydantic import ValidationError
from sqlalchemy.orm import Session
from core import security
from jose import jwt
import models
import schemas
import crud

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{config.API_MAIN_PREFIX}/login/access-token"
)


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_user(
    db: Session = Depends(get_db), token: str = Depends(reusable_oauth2)
) -> models.User:
    try:
        payload = jwt.decode(
            token, config.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    user = crud.user.get(db, id=token_data.sub)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
