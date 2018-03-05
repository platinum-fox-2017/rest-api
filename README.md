# rest-api

REST API with MVC architecture
Author: Gustaf Pahlevi

[Heroku:](https://www.google.com)


| Route           | HTTP      | Description                                                |
| ----------------|:---------:| ----------------------------------------------------------:|
| /api/signup     | POST      | Sign up with new user info                                 |
| /api/signin     | POST      | Sign in while get an access token based on credentials     |
| /api/users      | GET       | Get all the users info (admin only)                        |
| /api/users/:id  | GET       | Get a single info (admin and authenticated user)           |
| /api/users/     | POST      | Create a user (admin only)                                 |
| /api/users/:id  | PUT       | Delete a user (admin only)                                 |
| /api/users/:id  | DELETE    | Update a user with new info (admin and authenticated user) |
