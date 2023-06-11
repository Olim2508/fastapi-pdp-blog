#!/bin/sh
echo "Start app..."
alembic upgrade head

exec "$@"
