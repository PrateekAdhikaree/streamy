# Streamy - Live Streaming

## High Level System Architecture

![system-architecture](images/system-architecture.jpg 'system-architecture')

## Components

### [Web API Server](api/)

- json-server [[Ref]](https://www.npmjs.com/package/json-server)

### [RTMP Server](rtmp-server/)

- node-media-server [[Ref]](https://github.com/illuspas/Node-Media-Server)

### [React App](client/)

- react, redux, axios
- flv.js
- Google API [[Ref]](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in)
- [more...](/client#streamy---react-client)

## Prerequisites

- Node [[Ref]](https://nodejs.org/en/download/)
- OBS [[Ref]](https://obsproject.com/download)

## Steps to run

1. Start the [web server](api/#running-the-project)
2. Start the [RTMP server](rtmp-server/#running-the-project)
3. Starte OBS on your system and setup a scene with audio and video sources
4. Start the [react app](client/#running-the-project)
5. Navigate to [localhost:3000](http://localhost:3000) to access the app on a browser

#### Credits

Stephen Grider [Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/)
