const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api/decks', require('./routes/deck')); 

mongoose
  .connect('mongodb://localhost:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(9001, () => console.log('Server ativo na porta 9000'));