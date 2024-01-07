require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const connection = require('./config/database');

// import from .env

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config static file


// simple query
connection.query(
    'select * from Users u',
    function (err, results, fields){
        console.log(">>>results= ", results);
    }
);

// Set template engine
configViewEngine(app);


// route
app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});