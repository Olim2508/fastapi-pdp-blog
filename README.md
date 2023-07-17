# fastapi-pdp-blog

#### Run the local develop server:

    docker-compose up -d 
  
[//]: # (##### Server will bind 8021 port. You can get access to server by browser [http://localhost:8021]&#40;http://localhost:8021&#41;)

[//]: # (##### URL of graphql: [http://localhost:8021/graphql]&#40;http://localhost:8021/graphql&#41;)

[//]: # (##### URL of Pg admin: [http://localhost:5050]&#40;http://localhost:5050&#41;)


#### Postgres db will run inside docker container
#### For running the app:
```
cd app
uvicorn app:app --host 0.0.0.0 --port 8007 --reload
```

### Migration commands:
#### After creating models, import that model inside models/__init__.py file, then run migration command 
Create migrations file:
```
alembic revision -m "Put message here ..." --autogenerate
```

Migrate:
```
alembic upgrade head
```

Run formatting before making a commit
```
cd app && flake8 . && isort . black .
```

Run tests before making commit
```
cd app && python -m pytest
```