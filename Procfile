release: npm install --prefix ./client
release: npm build --prefix ./client
web: gunicorn --worker-class eventlet -w 1 server/app:app