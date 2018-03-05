# rest-api
REST API with MVC architecture


# My rest-api with aunthetication
basic routes for this project:

| Route          | HTTP   | Description  |
| -------------- |:------:| ------------:|
| /api/signup    | POST   | Signup with new user |
| /api/signin    | POST   | Signin and get access token |
| /api/users     | GET    | Get all users info, admin only |
| /api/users/:id | GET    | Get single user info, admin. auth user |
| /api/users     | POST   | Create a user, admin only |
| /api/users/:id | DELETE | Delete User, admin only |
| /api/users/:id | PUT    | Update user credentials, admin. auth user |


# Usage

setting up
```
npm install
sequelize db:create
sequelize db:migrate
sequelize db:seed:all

```

starting with npm
```
npm start

```
