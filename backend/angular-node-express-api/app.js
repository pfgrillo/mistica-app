const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

//--- Import DB settings ---
const { init } = require('./db')

//--- CORS access settings ---
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//--- Middlewares ---
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//--- Routes ---
const employees = require('./routes/employees')
const services = require('./routes/services')
const comandas = require('./routes/comandas')

app.use(employees);
app.use(services);
app.use(comandas);

//--- Start Server ---
init().then(() => {
    console.log('Starting server on port 3000')
    app.listen(process.env.PORT || 3000)
  })

module.exports = app;
