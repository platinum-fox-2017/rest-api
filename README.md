# rest-api
Demo app with basic REST API.

## REST api
List of basic router:

Route | HTTP | Description
------------ | ------------- | ------
[/api/hello?name={name}](http://localhost:3000/api/hello?name={name}) | GET | Print hello, {name} !

List of user routes:

Route | HTTP | Description
--- | --- | ----
[/api/users](http://localhost:3000/api/users) | GET | Get all the users
[/api/users/:id](http://localhost:3000/api/users/:id) | GET | Get a single users
[/api/users](http://localhost:3000/api/users) | POST | Create a user
[/api/user/:id](http://localhost:3000/api/user/:id) | DELETE | Delete a user
[/api/users/:id ](http://localhost:3000/api/users/:id)| PUT | Update a user with new info
[/api/user/:id](http://localhost:3000/api/user/:id) | PATCH | Update a user with specific new info

List of filter routes:

Route | HTTP | Description
--- | --- | ---
[/api/users?name="{name}" ](http://localhost:3000/api/users?name="{name}" )| GET | Get {name match in users}
[/api/users?name="{na}"](http://localhost:3000/api/users?name="{na}") | GET | Get {na} like in users


## Usage
with only npm:

```
npm install
npm start
npm run dev
```

Access the website via  [http://localhost:3000](http://localhost:3000) or API via [http://localhost:3000/api](http://localhost:3000/api).
