from typing import List, Tuple, Union, Dict, Any

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

    def update(self, db: Session, *, db_obj: Post, obj_in: Union[PostUpdate, Dict[str, Any]]) -> Post:
        obj_data = jsonable_encoder(db_obj)
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])

        if "category" in update_data:
            category_id = update_data["category"]
            category = db.query(Category).get(category_id)
            db_obj.category = category

        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete_posts_of_category(self, db: Session, *, category: Category):
        db.query(self.model).filter(self.model.category_id == category.id).delete()
        db.commit()


post = CRUDPost(Post)
