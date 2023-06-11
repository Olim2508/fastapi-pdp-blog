from fastapi import APIRouter

from endpoints import posts

main_prefix = '/api/v1'

router = APIRouter(prefix=main_prefix)
router.include_router(posts.router, prefix='/posts', tags=['Post'])

