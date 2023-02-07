#!/bin/sh
set -e

until [ \
  "$(curl -s -w '%{http_code}' -o /dev/null backend:8000)" \
  -eq 404 ]
do
  >&2 echo "Backend is unavailable - sleeping"
  sleep 1
done
>&2 echo "Backend is UP"

exec "$@"