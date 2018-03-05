# rest-api
REST API with MVC architecture

## REST API
List of sign up / sign in routes:

|    Route    |  HTTP   |                     Description                         |
| ----------- | ------- | ------------------------------------------------------- |
| /api/signup |  POST   | Sign up with new user info                              |
| /api/signin |  POST   | Sign in while get an access token based on credentials  |

List of user routes:

|           Route        |  HTTP  |             Description               |
| ---------------------- | ------ | ------------------------------------- |
| /api/users             | GET    | Get all the users                     |
| /api/users/:id         | GET    | Get a single users                    |
| /api/users/            | POST   | Create a users                        |
| /api/users/:id         | DELETE | Delete a users                        |
| /api/users/:id         | PUT    | Update a users with new info          |

## Usage
With only npm:
```
npm install
npm start
```

Access website via `http://localhost:3000` or API via `http://localhost:3000/api` or `https://eksa-restapi.herokuapp.com`
