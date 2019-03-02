pipenv lock -r > requirements.txt
docker build -t guest-dashboard:latest .