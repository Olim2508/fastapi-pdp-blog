# fastapi-pdp-blog

#### Run the local develop server:

    docker-compose up -d --build
  
##### Server will bind 8007 port. You can get access to server by browser [http://localhost:8007](http://localhost:8007)



#### For running the app without docker:

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