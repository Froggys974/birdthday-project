require('dotenv').config();
const express = require('express');
const server = express();
const hostname='0.0.0.0';
const port = 3000;
const mongoose =require('mongoose');
const cors = require('cors');

const corsOptions = {
  origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost']; //ajouter autre url

      if (allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

server.use(cors(corsOptions));



mongoose.connect(process.env.DB_CONNECTION_STRING);
server.use(express.urlencoded());

server.use(express.json());

const birthdayRoute=require('./api/routes/birthdayRoute');
birthdayRoute(server);



server.listen(port,hostname, () => {
  console.log(`Example Quotes app listening on ${hostname} on port ${port}`)
})