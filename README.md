# Rick & Morty Characters

I created this approach to the [Rick & Morty API](https://rickandmortyapi.com/) using [MERN](https://www.mongodb.com/mern-stack) stack technologies, I chose MongoDB because I did not work with it before and thought it would be a nice chance to try something different. You can find the backend located under `server` and the frontend in `client`.

The client of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Client Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Server Available Scripts

### `yarn start`

Runs the server in development mode. **Requires a mongoDB database running**.\
Open [http://localhost:3001](http://localhost:3001) to access it in the browser.

## Server API

Most of these calls require that you have authenticated your session through `/api/auth/signin`. You can create a new user with `/api/auth/signup`, and you do need a local service running your MongoDB installation.

### `/api/test/all`
Tests free access content.
### `/api/test/user`
Tests user authored content.
### `/api/test/admin`
Tests admin authored content.
### `/api/favorite/add`
Given a user, adds a favorite to his favorites list. 
```
{
    username: string,
    favorite: string
}
```
### `/api/favorite/remove`
Given a user, removes a favorite to his favorites list. 
```
{
    username: "user",
    favorite: "35"
}
```
### `/api/auth/signup`
Given a set of data, creates a new user. 
```
{
    "username": "user",
    "email": "user@test.com",
    "password": "user",
    "roles": ["user"]
}
```
### `/api/auth/signin`
Given a set of data, authenticates an existing user. 
```
{
    "username": "user",
    "password": "password"
}
```
### `/api/characters`
Gets all existing characters.
### `/api/characters/:page`
Gets an specific characters page.
### `/api/character/:id`
Gets a single character given an `id`.