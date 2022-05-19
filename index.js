const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(session(
    {
      secret: '1234567890',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: 'auto',
        httpOnly: true,
        maxAge: 3600000
      }
    })
  );

app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/user', require('./modules/auth/routes/user'));
app.use('/login', require('./modules/auth/routes/login'));
app.use('/oauth-callback', require('./modules/auth/routes/oauth-callback'));

app.use('/api/root', require('./routes/root')); 
app.use('/api/deck', require('./routes/deck')); 

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