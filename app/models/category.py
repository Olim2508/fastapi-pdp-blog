from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from db.base import Base

if TYPE_CHECKING:
    from .post import Post  # noqa: F401


class Category(Base):
    __tablename__ = 'category'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    posts = relationship("Post", back_populates="category")
