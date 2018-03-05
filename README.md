# rest-api
REST API with MVC architecture

# My App Name
Demo app with basic REST API

#REST API

List of bacic routes:

**Route** | **HTTP** | **Description**
--------- | -------- | ---------------
/api/hello?name={name} | GET | Print hello, {name} !

List of user routes:

**Route** | **HTTP** | **Description**
--------- | -------- | ---------------
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single users
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info
/api/users/:id | PATCH | Update a user with specific new info

List of routes:

**Route** | **HTTP** | **Description**
--------- | -------- | ---------------
/api/users?name="{name}" | GET | Get {name} match in users
/api/users?name="{na}" | GET | Get {na} like in users

#Usage

With only npm:

```
npm install
npm start
npm run dev
```

Access the website via `<span style="color:red">http://localhost:300</span>` or API via `<span style="color:red">http://localhost:3000/api</span>`