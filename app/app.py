from fastapi import FastAPI

# from db_conf import db_session
# from db.db_conf import db_session
from api.api_v1.api import api_router
from fastapi.middleware.cors import CORSMiddleware

# db = db_session.session_factory()


app = FastAPI(
    title='Blog App',
    docs_url='/docs/',
    openapi_url='/docs/openapi.json',
    servers=[
        {
            "url": "http://127.0.0.1:8007",
            "description": "Local environment",
        },
        {
            "url": "https://api.stage.my-blog.com",
            "description": "STAGE environment",
        },
        {
            "url": "https://api.my-blog.com",
            "description": "PROD environment",
        },
    ],
)

app.include_router(api_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
