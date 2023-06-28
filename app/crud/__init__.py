from .crud_category import category


from .base import CRUDBase
from models.post import Post
from schemas.post import PostCreate, PostUpdate

post = CRUDBase[Post, PostCreate, PostUpdate](Post)
