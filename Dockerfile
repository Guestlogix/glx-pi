FROM alpine

LABEL maintainer "Hank Goddard <hgoddard@guestlogix.com>"
LABEL description "Team Guest App Dashboard"

# Run Flask app as production
ENV FLASK_ENV PROD

# Copy python requirements file
COPY requirements.txt /tmp/requirements.txt

# Thanks https://github.com/hellt/nginx-uwsgi-flask-alpine-docker/blob/master/python3/Dockerfile
RUN apk add --no-cache \
    python3-dev \
    bash \
    nginx \
    uwsgi \
    build-base \
    uwsgi-python3 \
    supervisor && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install -r /tmp/requirements.txt && \
    rm /etc/nginx/conf.d/default.conf && \
    rm -r /root/.cache

# Copy the Nginx global conf
COPY nginx.conf /etc/nginx/
# Copy the Flask Nginx site conf
COPY guest-dashboard-nginx.conf /etc/nginx/conf.d/
# Copy the base uWSGI ini file to enable default dynamic uwsgi process number
COPY uwsgi.ini /etc/uwsgi/
# Custom Supervisord config
COPY supervisord.conf /etc/supervisord.conf

# Add demo app
COPY ./server /server
COPY run.py run.py

CMD ["/usr/bin/supervisord"]