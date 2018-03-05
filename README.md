# My App Name
Demo app with basic REST API.

### REST API

List of user routes:

route | HTTP | Description
-------- | ------ | -----------
`/api/signup` | POST | Sign up with new user info
`/api/users/:id` | GET | Sign in while get an access token based on credentials
`/api/users` | GET | Get all the users (admin only)
`/api/users/:id` | GET | Get a single user (admin and authenticated user)
`/api/users` | POST | create a user (admin only)
`/api/users/:id` | DELETE | delete a user (admin only)
`/api/users/:id` | PUT | update a user with new info (admin and authenticated user)

List of filter routes:

route | HTTP | Description
-------- | ------ | -----------
`/api/users?id="{id}"` | GET | Get {id} match in users

### Usage

Access the website via `https://afternoon-sea-60034.herokuapp.com/`.
