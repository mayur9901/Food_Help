const express = require('express');
const app = express();
require('./connection/connection.js');
const router = require('./router.js');
var url = require('url');
var bodyParser = require('body-parser');
var cors = require('cors');
// app.use(express.json);
let port = 8000;

app.use(bodyParser.json()); 
app.use(cors());

app.use(router)

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});