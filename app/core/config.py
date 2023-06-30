from pydantic import BaseSettings


class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_PORT: str
    POSTGRES_DB: str

    EMAIL_SENDER: str = 'rahmatovolim3@gmail.com'
    ENV: str = 'LOCAL'

    API_MAIN_PREFIx: str = '/api/v1'

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        # check_expiration = True
        # jwt_header_prefix = "Bearer"
        # jwt_header_name = "Authorization"


config = Settings()
