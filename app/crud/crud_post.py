from typing import List, Tuple

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session, joinedload

from crud.base import CRUDBase
from models import Category
from models.post import Post
from schemas.post import PostCreate, PostUpdate


class CRUDPost(CRUDBase[Post, PostCreate, PostUpdate]):
    def create_(self, db: Session, *, obj_in: PostCreate, category_id: int) -> Post:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, category_id=category_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_multi_by_category(self, db: Session, *, category_ids: List, skip: int = 0, limit: int = 100) -> Tuple:
        query = db.query(self.model)
        if not category_ids:
            posts = query.order_by(self.model.id.desc()).offset(skip).limit(limit)
        else:
            posts = (
                query(self.model)
                .join(self.model.category)
                .filter(Category.id.in_(category_ids))
                .order_by(self.model.id.desc())
                .offset(skip)
                .limit(limit)
            )
        posts = posts.options(joinedload(self.model.category))
        count = posts.count()
        return posts.all(), count

    def delete_posts_of_category(self, db: Session, *, category: Category):
        db.query(self.model).filter(self.model.category_id == category.id).delete()
        db.commit()


post = CRUDPost(Post)
