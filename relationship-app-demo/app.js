const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(logger('dev'));
app.use(cors({origin: 'http://localhost:4200', credentials: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes/index')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Running successfully',
}));

module.exports = app;
