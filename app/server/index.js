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
app.use(express.static('../build'))

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

//**Endpoints**

//Get
app.get('/api/bins/:shelf', bin_controller.getAll);
app.get('/api/:id', bin_controller.getOne);
//Create
app.put('/api/:id/:name/:price', bin_controller.create);
//Update
// Removed we only need one update/edit thing app.put('/api/:id/:name/:price', bin_controller.update);
//Delete
app.put('/api/:id', bin_controller.delete);

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on port ${port}.`)
});