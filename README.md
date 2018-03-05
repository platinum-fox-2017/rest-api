# rest-api
REST API with MVC architecture

### List of basic routes:

Route | HTTP | Description
---------------------- | ----- | ----------------------
![#f03c15](`/api/hello?name={name}`) |  GET  | Print hello, `![#f03c15]({name})` !

### List of user routes:

Route | HTTP | Description
-------------- | ------ | ------------------------------------
`![#f03c15](/api/users)` | GET | Get all the users
`![#f03c15](/api/users/:id)` | GET | Get a single user
`![#f03c15](/api/users/)` | POST | Create a user
`![#f03c15](/api/users/:id)` | DELETE | Delete a user
`![#f03c15](/api/users/:id)` | PUT | Update a user with new info
`![#f03c15](/api/users/:id)` | PATCH | Update a user with specific new info

### List of filter routes:

Route | HTTP | Description
-------------- | ------ | ------------------------------------
`![#f03c15](/api/users?name="{name}")` | GET | Get `![#f03c15]({name})` match in users
`![#f03c15](/api/users?name={na})` | GET | Get `![#f03c15]({na})` like in users

# Usage
### With only npm:
```
npm install
npm start
npm run dev
```

### Access the website via ```![#f03c15](http://localhost:3000)``` or API via ```![#f03c15](http://localhost:3000/api)```.