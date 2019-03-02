## guest-app-dashboard

A lightweight server and react app to surface real time data to the guest app team.

## Getting Started

1) Build the frontend `yarn --cwd ./client build`
2) Run the server `pipenv run python run.py`

## Docker

To generate the docker image run
```s
./dockerize.sh
```

To run the docker image run
```s
docker run -p 8008:80 --name guest-dashboard --rm guest-dashboard:latest
```

## Deployment

This app is deployed best using Heroku. Due to the fact that heroku charges for CI, we have to build the app locally first using `yarn build` which will deposit the files into the `server` folder within `static` and `template` directories so that they can be referenced by `index.html`.