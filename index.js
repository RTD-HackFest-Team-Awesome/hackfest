const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./sockets').initialize(io);

const knexconfig = require('./knexfile');
const knex = require('knex')(knexconfig);

const gtfsdb = require('gtfsdb')(knex);

app.get('/agency', (req, res, next) => {
  gtfsdb
    .getAllAgencies()
    .then((agencies) => {
      res.send(agencies);
    })
    .catch(next);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*eslint-disable no-unused-vars*/
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


module.exports = {app, server};
