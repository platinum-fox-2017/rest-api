# rest-api
REST API with MVC architecture

## REST API
### List of basic routes:

Route | HTTTP | Desctiption
----- | ----- | -----------
`/api` | GET | Print hellp, {name} !

### List of user routes:

Route | HTTTP | Desctiption
----- | ----- | -----------
`/api/users` | GET | Get all the users
`/api/users/:id` | GET | Get single users
`/api/users` | POST | Create a user
`/api/users/:id` | DELETE | Delete a users
`/api/users/:id` | PUT | Update a user with a new info
`/api/users/:id` | PATCH | Update a user with a specific new info

### List of filter  routes:

Route | HTTTP | Desctiption
----- | ----- | -----------
`/api/users?name="{name}"` | GET | Get {name} match in users
`/api/users?name={na}` | GET | Get {na} like in users

## Usage
### With only npm:

```
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
