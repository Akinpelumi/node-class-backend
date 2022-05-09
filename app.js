var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`port ${port} is up and jumping well`);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => res.status(404).json({
  status: 'Not Found',
  code: 404,
  message: 'oooops! You have reached a dead end'
}));

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'Server failure',
    message: err.message || 'oooops! Something broke'
  });
});

module.exports = app;
