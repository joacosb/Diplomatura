const express = require('express');
const path = require('path');
const session = require('express-session');
const createError = require('http-errors');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();

// Configuración handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'claveSecreta123456',
  resave: false,
  saveUninitialized: true
}));

// Rutas
const loginRouter = require('./routes/admin/login');
const novedadesRouter = require('./routes/admin/novedades');

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', novedadesRouter);

// Errores
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
