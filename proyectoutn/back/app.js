const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();

const loginRouter = require('./routes/admin/login');
const novedadesRouter = require('./routes/admin/novedades');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'claveSecreta123456',
  resave: false,
  saveUninitialized: true
}));

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', novedadesRouter);

app.get('/', (req, res) => {
  res.redirect('/admin/login');
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = app;
