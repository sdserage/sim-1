const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const bin_controller = require('./bin_controller.js');
require('dotenv').config()

//revise below for database connection


var app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) );

//**Endpoints**

//Get
app.get('/api/bins/shelf', bin_controller.getAll);
app.get('/api/bin/shelf', bin_controller.getOne);
//Create
app.put('/api/bins/shelf/:binNum', bin_controller.create);
//Update
app.put('/api/bins/shelf', bin_controller.update);
//Delete
app.put('/api/bins/shelf/:binNum', bin_controller.delete);

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on port ${port}.`)
});