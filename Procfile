release: npm install --prefix ./client
release: npm build --prefix ./client
web: gunicorn --chdir ./server --worker-class eventlet -w 1 server/app:app