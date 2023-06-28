run:
	cd app && uvicorn app:app --host 0.0.0.0 --port 8007 --reload

migrate:
	cd app && alembic upgrade head

m:
	cd app && alembic revision -m ${mess} --autogenerate