# My App Name
Demo app with basic REST API.

### REST API
List of basic routes:
|route | HTTP | Description
|------- | ------- | -----------
|`/api/hello?name={name}` | GET | Print hello, `{name}`!

List of user routes:
route | HTTP | Description
-------- | ------ | -----------
`/api/users` | GET | Get all the users
`/api/users/:id` | GET | Get a single user
`/api/users` | POST | create a user
`/api/users/:id` | DELETE | delete a user
`/api/users/:id` | PUT | update a user with new info
`/api/users/:id` | PATCH | update a user with specific new info

List of filter routes:
route | HTTP | Description
-------- | ------ | -----------
`/api/users?name="{name}"` | GET | Get {name} match in users
`/api/users?name="{na}"` | GET | Get {na} like in users

### Usage
With only npm:
```
npm install
npm start
npm run dev
```
Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
