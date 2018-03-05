# rest-api
REST API with MVC architecture

#### List Router API
List of sign up / sign in routes:

|    Route    |  HTTP   |                     Description                         |
| ----------- | ------- | ------------------------------------------------------- |
| /api/signup |  POST   | Sign up with new user info                              |
| /api/signin |  POST   | Sign in while get an access token based on credentials  |

List of user routes:

|           Route        |  HTTP  |                 Description                   |
| ---------------------- | ------ | --------------------------------------------- |
| /api/users             | GET    | Get all the users (admin only)                |
| /api/users/:id         | GET    | Get a single users (admin and user)           |
| /api/users/            | POST   | Create a users (admin only)                   |
| /api/users/:id         | DELETE | Delete a users (admin only)                   |
| /api/users/:id         | PUT    | Update a users with new info (admin and user) |

#### Usage
With only npm:
```
npm install
npm run dev
npm run start
```

Access website via `http://localhost:3000` or API via `http://localhost:3000/api` or `https://eksa-restapi.herokuapp.com`
