const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');

const app = Express();
app.use(Express.json());
app.use(BodyParser.json());
app.use(Cors({
  origin: true,
  credentials: true
}));

app.use('/api/decks', require('./routes/deck')); 

Mongoose
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