# rest-api
REST API with MVC architecture

# REST API
######list of basic routers:

| Route                  | HTTP           | Description          |
| ---------------------- |:--------------:| --------------------:|
| /api/hello?name={name} | GET            | Print hello, {name} !|

list of user routes:

| Route            | HTTP     | Description                           |
| ---------------- |:--------:| -------------------------------------:|
| /api/users       | GET      | Get all the users                     |
| /api/users/:id   | GET      | Get a single user                     |
| /api/users       | POST     | Create a user                         |
| /api/users/:id   | DELETE   | Delete a user                         |
| /api/users/:id   | PUT      | Update a user with new info           |
| /api/users/:id   | PATCH    | Update a user with specific new info  |

list of filter routes:

| Route                    | HTTP           | Description                |
| ------------------------ |:--------------:| --------------------------:|
| /api/users?name="{name}" | GET            | get {name} match in users  |
| /api/users?name="{na}"   | GET             | get {na} like in users    |

#Usage

With only npm:
```
npm install
npm start
npm run dev
```
