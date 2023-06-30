from fastapi import APIRouter

from api.api_v1.endpoints import categories, posts
from core.config import config

api_router = APIRouter(prefix=config.API_MAIN_PREFIx)
api_router.include_router(posts.router, prefix='/post', tags=['Post'])
api_router.include_router(categories.router, prefix='/category', tags=['Category'])
