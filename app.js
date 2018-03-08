const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('dotenv').config

const user = require('./routes/user.js')

app.use('/',user)


app.listen(process.env.PORT||3000,()=>{
  console.log('AYE:3000');
})
