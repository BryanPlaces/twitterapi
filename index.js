const express = require('express');
const usersRouter = require('./api/users/index.js');
const tweetsRouter = require('./api/tweets/index.js');
const mongoose = require('mongoose');
const morgan = require('morgan');
const compression = require('compression');
const config = require('./.env');
///////////////////////////////////////////////

const app = express();
const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;
const _DB = options.DB_URL;
mongoose.connect(_DB);

//Middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(compression());

app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);

app.listen(_PORT, function() {
    console.log("Escuchando en el puerto " + _PORT);
})
