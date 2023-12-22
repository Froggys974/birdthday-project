require('dotenv').config();
const express = require('express');
const server = express();
const hostname='0.0.0.0';
const port = 3000;



server.use(express.urlencoded());
server.use(express.json());

const postRoute=require('../../testNode2/src/api/routes/quotesRoute');
postRoute(server);



server.listen(port,hostname, () => {
  console.log(`Example Quotes app listening on ${hostname} on port ${port}`)
})