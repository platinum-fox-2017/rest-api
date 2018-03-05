const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port',(process.env.PORT|| 3000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

const routes_signup = require('./routes/signup');
const routes_signin = require('./routes/signin');
const routes_users = require('./routes/users');

app.use('/api/signup',routes_signup);
app.use('/api/signin',routes_signin);
app.use('/api/users',routes_users);


app.listen(app.get('port'),function(){
    console.log(`Node is running on port`,app.get('port'))
});