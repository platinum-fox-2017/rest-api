const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes_signup = require('./routes/signup');
const routes_signin = require('./routes/signin');
const routes_users = require('./routes/users');

app.use('/api/signup',routes_signup);
app.use('/api/signin',routes_signin);
app.use('/api/users',routes_users);


app.listen(3000);