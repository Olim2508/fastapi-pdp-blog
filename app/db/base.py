# Import all the models, so that Base has them before being
# imported by Alembic
from db.base_class import Base  # noqa
# from models.post import Post, Category  # noqa