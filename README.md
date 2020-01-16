This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

### IMPORTANT 
it will be work only with yarn start because it run webpack dev server with proxy, for build it need to config in webserver(ngnix) or setup cross origin http request

usually a file .env is not written to the repository, but in our case it is appropriate for ease of checking the task

the UI does not provide the ability to reset the filter, and it has not been implemented, but in a real application it needs to be implemented