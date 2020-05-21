# Streamy - RTMP server

This is the Real Time Message Protocol (RTMP) server for the live video streaming service.

The purpose is to live streams videos for the React App.

## Tools Used

- node-media-server [[Ref]](https://github.com/illuspas/Node-Media-Server)

## Running the project

In the project directory, you can run:

### `npm ci`

Installs the required packages in _node_modules_ directory from the _package-lock.json_ file.

### `npm start`

Starts

- RTMP server on **http://localhost:1935**
- HTTP server on **http://localhost:8000**

## Publishing live streams

For more usage details please refer the package's instructions [here](https://github.com/illuspas/Node-Media-Server/blob/master/README.md#usage)

### From OBS

> Settings -> Stream

Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : STREAM_NAME

## Accessing the live stream

### http-flv

```
http://localhost:8000/live/STREAM_NAME.flv
```

[Setup details](https://github.com/illuspas/Node-Media-Server/blob/master/README.md#via-flvjs-over-http-flv)
