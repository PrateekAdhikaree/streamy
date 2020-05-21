# Streamy - React client

This is the React Client for the live video streaming service

## Tools Used

- react-js [[Ref]](https://reactjs.org/docs/getting-started.html)
- Google API [Ref](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in) [Script Location](https://apis.google.com/js/api.js)
- redux, react-router-dom, redux-form
- axios, redux-thunk
- flv.js [[Ref]](https://www.npmjs.com/package/flv.js#getting-started)
- Semantics UI (_for CSS_) [[Ref]](https://semantic-ui.com/introduction/getting-started.html)

Full list: [package.json](package.json)

## Running the project

In the project directory, you can run:

### `npm ci`

Installs the required packages in _node_modules_ directory from the _package-lock.json_ file.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## User States

![user-states](images/user-states.jpg 'user-states')

## Mockups

### Index (StreamList Component)

![index-page](images/1-index.jpg 'Index')

### Show Stream (StreamShow Component)

![show-stream](images/2-show-stream.jpg 'Show stream')

### Index (StreamList Component)

![logged-in-index](images/3-index-logged-in.jpg 'Index - Logged in')

### Create Stream (StreamCreate Component)

![create-stream](images/4-create-stream.jpg 'Create stream')

### Edit Stream (StreamEdit Component)

![edit-stream](images/5-edit-stream.jpg 'Edit stream')

### Delete Stream (StreamDelete Component)

![delete-stream](images/6-delete-stream.jpg 'Delete stream')

## React Components

**main file**: [index.js](src/index.js)

- [history](src/history.js)
- [App](src/components/App.js)
  - [Header](src/components/Header.js)
  - [Modal](src/components/Modal.js)
  - [GoogleAuth](src/components/GoogleAuth.js)
  - streams
    - [StreamList](src/components/streams/StreamList.js)
    - [StreamForm](src/components/streams/StreamForm.js)
    - [StreamShow](src/components/streams/StreamShow.js)
    - [StreamCreate](src/components/streams/StreamCreate.js)
    - [StreamEdit](src/components/streams/StreamEdit.js)
    - [StreamDelete](src/components/streams/StreamDelete.js)
  - apis
    - [streams](src/apis/streams.js)

## Redux Components

### Actions

**List:** [types](src/actions/types.js)

- SIGN_IN
- SIGN_OUT

- CREATE_STREAM
- FETCH_STREAMS
- FETCH_STREAM
- DELETE_STREAM
- EDIT_STREAM

**Definitions:**

- [index](src/actions/index.js)

### Reducers

- [index](src/reducers/index.js)
  - [authReducer](src/reducers/authReducer.js)
  - [streamReducer](src/reducers/streamReducer.js)

## User Flow

### TODO
