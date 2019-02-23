## guest-app-dashboard

A lightweight server and react app to surface real time data to the guest app team.

## Deployment

This app is deployed best using Heroku. Due to the fact that heroku charges for CI, we treat our app server as a build server as well. On deployment, the react app is build using the build scripts, and all artifacts are moved to the `./server` dir where the flask app serves it.

> NOTE: Ensure that the both the Nodejs and Python buildpacks are used.