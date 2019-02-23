release: npm --prefix /client install & npm --prefix /client run build
web: gunicorn --worker-class eventlet -w 1 app:app