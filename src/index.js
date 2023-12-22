require('dotenv').config();
const express = require('express');
const server = express();
const hostname='0.0.0.0';
const port = 3000;


const mongoose =require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING);
server.use(express.urlencoded());

server.use(express.json());

const birthdayRoute=require('./api/routes/birthdayRoute');
birthdayRoute(server);



server.listen(port,hostname, () => {
  console.log(`Example Quotes app listening on ${hostname} on port ${port}`)
})