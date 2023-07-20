#!/bin/sh

python backend_pre_start.py

echo "Running alembic migrations..."
alembic upgrade head

exec "$@"
