release: yarn build --cwd ./client
web: gunicorn --worker-class eventlet -w 1 app:app