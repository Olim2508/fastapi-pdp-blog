from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import schemas
from api import deps

router = APIRouter()


@router.get("/", response_model=List[schemas.Post])
def read_posts(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    category: str = None,
) -> Any:
    """
    Retrieve items.
    category is passed like category=1,2,3
    """
    category_id_list = category.split(",")
    posts = crud.post.get_multi_by_category(db, skip=skip, limit=limit, category_ids=category_id_list)
    return posts


@router.post("/", response_model=schemas.Post)
def create_post(
    *,
    db: Session = Depends(deps.get_db),
    post_in: schemas.PostCreate,
) -> Any:
    """
    Create new post.
    """
    category = crud.category.get(db=db, id=post_in.category)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    post_data = {
        'title': post_in.title,
        'author': post_in.author,
        'content': post_in.content,
        'category': category,
    }
    post = crud.post.create_(db=db, obj_in=post_data)
    return post


# @router.delete("/{id}", response_model=schemas.Post)
# def delete_post(
#     *,
#     db: Session = Depends(deps.get_db),
#     id: int,
# ) -> Any:
#     """
#     Delete post.
#     """
#     post = crud.post.get(db=db, id=id)
#     if not post:
#         raise HTTPException(status_code=404, detail="Post not found")
#     post = crud.post.remove(db=db, id=id)
#     return post
