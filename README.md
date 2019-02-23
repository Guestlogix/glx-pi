## guest-app-dashboard

A lightweight server and react app to surface real time data to the guest app team.

## Deployment

This app is deployed best using Heroku. Due to the fact that heroku charges for CI, we have to build the app locally first using `yarn build` which will deposit the files into the `server` folder so that they can be referenced by `index.html`.

> NOTE: Ensure that the both the Nodejs and Python buildpacks are used.