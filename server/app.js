const express = require('express');
const app = express();
require('./connection/connection.js');
const router = require('./router.js');
let url = require('url');
let bodyParser = require('body-parser');
let cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(bodyParser.json()); 
app.use(cors());

app.use(router);

let port = 8000;
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});