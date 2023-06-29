from fastapi import APIRouter

from api.api_v1.endpoints import categories, posts

main_prefix = '/api/v1'

api_router = APIRouter(prefix=main_prefix)
api_router.include_router(posts.router, prefix='/post', tags=['Post'])
api_router.include_router(categories.router, prefix='/category', tags=['Category'])
