
from fastapi import APIRouter


router = APIRouter()


@router.get('/my-api/')
def my_test_api():
    return {"message": "hello fastapi"}

