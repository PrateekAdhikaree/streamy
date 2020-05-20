# Streamy - Live Streaming

## High Level System Architecture

![system-architecture](images/system-architecture.jpg 'system-architecture')

## Components

### [React Server](client/)

- react, redux
- Google API [[Ref]](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in)

[Click here for more details](client/)

### RTMP Server

### [Web Server](api/)

- json-server [[Ref]](https://www.npmjs.com/package/json-server)

## Steps to run

1. Start the [Web Server](api/#running-the-project)
2. Start the [React Server](client/#running-the-project)
3. Navigate to [localhost:3000](localhost:3000) to access the app on a browser
