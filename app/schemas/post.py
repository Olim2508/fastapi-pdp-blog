from datetime import datetime
from typing import Optional

from pydantic import BaseModel


# Shared properties
class PostBase(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    content: Optional[str] = None
    time_created: Optional[datetime] = None


# Properties to receive on item creation
class PostCreate(PostBase):
    title: str
    author: str
    content: str


# Properties to receive on item update
class PostUpdate(PostBase):
    pass


# Properties shared by models stored in DB
class PostInDBBase(PostBase):
    id: int
    title: str
    author: str
    content: str

    class Config:
        orm_mode = True


# Properties to return to client
class Post(PostInDBBase):
    pass


# Properties stored in DB
class PostInDB(PostInDBBase):
    pass
