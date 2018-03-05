# rest-api
REST API with MVC architecture

### AGRHA REST-api

Demo App with basic REST API.

### REST-api

List of basic routes:


| Routes                | HTTP          | Description          |
| ---------------------:|:-------------:| --------------------:|
| /api/hello?name={name}| GET           | Print hello,{name}!  |

List of user routes:

| Routes                | HTTP          | Description                             |
| ---------------------:|:-------------:| ---------------------------------------:|
| /api/users            | GET           |    Get all the users                    |
| /api/users/:id        | GET           |    Get a single user                    |
| /api/users/           | POST          |    Create a user                        |
| /api/users/:id        | DELETE        |    Delete a user                        |
| /api/users/:id        | PUT           |    Update a user with new info          |
| /api/users/:id        | PATCH         |    Update a user with specific new info |

List of filter routes:

| Routes                   | HTTP          | Description                             |
| ------------------------:|:-------------:| ---------------------------------------:|
| /api/users?name="{name}" | GET           |    Get {name} match in users            |
| /api/users/:id           | GET           |    Get {na} like in users               |


Usage

With only npm:

npm install
npm start
npm run dev

access the website via http://localhost:3000 or API via http://localhost:3000/api
