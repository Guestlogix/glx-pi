release: npm install --prefix ./client & npm build --prefix ./client
web: gunicorn --worker-class eventlet -w 1 app:app