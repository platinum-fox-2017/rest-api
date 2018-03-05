# RES API with Authentication
Demo app with basic REST API.

List of user routes:

Route | HTTP | Description
--- | --- | ----
[/api/signup](http:localhost:3000/api/signup) | POST | Sign up with new user info
[/api/signin](http:localhost:3000/api/signin) | POST | Sign in while get an access token base on credentials
[/api/users](http://localhost:3000/api/users) | GET | Get all users info (admin only)
[/api/users/:id](http://localhost:3000/api/users/:id) | GET | Get a single user information (admin and authenticated user)
[/api/users](http://localhost:3000/api/users) | POST | Create a user (admin only)
[/api/user/:id](http://localhost:3000/api/user/:id) | DELETE | Delete a user (admin only)
[/api/users/:id ](http://localhost:3000/api/users/:id)| PUT | Update a user with new info (admin and authenticated user);


## Usage
with only npm:

```
npm install
npm start
```

Access the website via  [http://localhost:3000](http://localhost:3000) or API via [http://localhost:3000/api](http://localhost:3000/api).
