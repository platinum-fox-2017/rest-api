# rest-api
REST API with MVC architecture

Morning Releases (Part 1)

Release 0
1. sudo npm install express-generator
2. express . 

| Route                     | HTTP   |        Description                                               |
| ------------------------- | ------ | ---------------------------------------------------------------- |
| <p style="color:red">/api/signup</p>               | POST   | Sign up with new user info                                       |
| /api/signin               | POST   | Sign in while get an access token based on credentials           |
| /api/users                | GET    | Get all the users info (admin only)                              |
| /api/users/:id            | GET    | Get a single user info (admin and authenticated user)            |
| /api/users                | POST   | Create a user (admin only)                                       |
| /api/users/:id            | DELETE | Create a user (admin only)                                       |
| /api/users/:id            | PUT    | Update a user with new info (admin and authenticated user)       |
