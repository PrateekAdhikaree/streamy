# Streamy - Web server

This is the Web API server for the live video streaming service.

The purpose is to keep a track of the currently running live streams and provide those to the React App.

## Tools Used

- json-server [[Ref]](https://www.npmjs.com/package/json-server)

## Running the project

In the project directory, you can run:

### `npm ci`

Installs the required packages in _node_modules_ directory from the _package-lock.json_ file.

### `npm start`

Starts the server at [http://localhost:3001](http://localhost:3001).

## Store

Currently saves the list of "streams" in [db.json](db.json) as a JSON.

## Domain

http://localhost:3001

## Resources

Has a single RESTful resource available.

### streams

<!-- prettier-ignore -->
GET    /streams
GET    /streams/:id
POST   /streams
PUT    /streams/:id
PATCH  /streams/:id
DELETE /streams/:id
