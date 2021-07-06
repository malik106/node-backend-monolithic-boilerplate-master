const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./src/routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
