const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'marshall',
      database : 'reactform'
    }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// =====================================
// IMPORTED FUNCTIONS 
// =====================================

const { getData } = require('./controllers/getData');
const { addData } = require('./controllers/addData');
const { deleteData } = require('./controllers/deleteData');
const { updateData } = require('./controllers/updateData');

// =======================================
// Endpoints //
// =======================================

app.get('/', (req, res) => getData(req, res, db));
app.post('/', (req, res) => addData(req, res, db));
app.delete('/', (req, res) => deleteData(req, res, db));
app.put('/', (req, res) => updateData(req, res, db));

// =======================================

app.listen(3000, () => {
    console.log('app is running on port 3000');
});