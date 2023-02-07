FROM python:3.8-slim

ARG APP_USER=appuser
RUN groupadd -r ${APP_USER} && useradd --no-log-init -r -g ${APP_USER} ${APP_USER}

RUN set -ex \
    && RUN_DEPS=" \
    libpcre3 \
    mime-support \
    postgresql-client \
    wget \
    " \
    && seq 1 8 | xargs -I{} mkdir -p /usr/share/man/man{} \
    && apt-get update && apt-get install -y --no-install-recommends $RUN_DEPS \
    && rm -rf /var/lib/apt/lists/*

ADD requirements.txt /requirements.txt

RUN set -ex \
    && BUILD_DEPS=" \
    build-essential \
    libpcre3-dev \
    libpq-dev \
    " \
    && apt-get update && apt-get install -y --no-install-recommends $BUILD_DEPS \
    && pip install --no-cache-dir -r /requirements.txt \
    \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false $BUILD_DEPS \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /code/
WORKDIR /code/
ADD . /code/

EXPOSE 8000

ARG DATABASE_URL
ARG SECRET_KEY
ARG ALLOWED_HOSTS
ENV DATABASE_URL=$DATABASE_URL SECRET_KEY=$SECRET_KEY DEBUG=False ALLOWED_HOSTS=$ALLOWED_HOSTS

RUN DATABASE_URL=$DATABASE_URL SECRET_KEY=$SECRET_KEY python manage.py collectstatic --noinput

ENV UWSGI_WSGI_FILE=backend/wsgi.py
ENV UWSGI_HTTP=:8000 UWSGI_MASTER=1 UWSGI_HTTP_AUTO_CHUNKED=1 UWSGI_HTTP_KEEPALIVE=1 UWSGI_LAZY_APPS=1 UWSGI_WSGI_ENV_BEHAVIOR=holy
ENV UWSGI_WORKERS=2 UWSGI_THREADS=4
ENV UWSGI_STATIC_MAP="/staticfiles/=/code/staticfiles/" UWSGI_STATIC_EXPIRES_URI="/staticfiles/.*\.[a-f0-9]{12,}\.(css|js|png|jpg|jpeg|gif|ico|woff|ttf|otf|svg|scss|map|txt) 315360000"

USER ${APP_USER}:${APP_USER}

ENTRYPOINT ["/code/docker-entrypoint.sh"]

CMD ["uwsgi", "--show-config"]