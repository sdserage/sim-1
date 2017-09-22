const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const bin_controller = require('./bin_controller.js');
require('dotenv').config()

//revise below for database connection

// const CONNECTION_STRING = "postgres://zrdvyvzdllbbqw:e6eea9ed508a1468dd5f74428c432ec7713c9e3c7b4013e4ba2a3b61720398b1@ec2-184-73-189-221.compute-1.amazonaws.com:5432/d43nu5mqgi1qoq?ssl=true"

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