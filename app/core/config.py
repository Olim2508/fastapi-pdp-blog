import secrets

from pydantic import BaseSettings


class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_PORT: str
    POSTGRES_DB: str

    EMAIL_SENDER: str = 'rahmatovolim3@gmail.com'
    ENV: str = 'LOCAL'

    API_MAIN_PREFIX: str = '/api/v1'
    SECRET_KEY: str = secrets.token_urlsafe(32)
    SECRET_REFRESH_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 5
    # 60 minutes * 24 hours * 8 days = 8 days
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8

    EMAIL_TEMPLATES_DIR: str = "/app/email-templates/build"
    EMAILS_ENABLED: bool = False

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        # check_expiration = True
        # jwt_header_prefix = "Bearer"
        # jwt_header_name = "Authorization"


config = Settings()
