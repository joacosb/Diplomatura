const express = require('express');
const router = express.Router();
const empleadosModel = require('../../models/empleadosModel');
const md5 = require('md5');

// Mostrar formulario de login
router.get('/', (req, res) => {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

// Procesar login
router.post('/', async (req, res) => {
  const { usuario, password } = req.body;
  const empleado = await empleadosModel.getByUserAndPass(usuario, md5(password));

  if (empleado) {
    req.session.id_empleado = empleado.id_emp;
    req.session.nombre = empleado.nombre;
    res.redirect('/admin/novedades');
  } else {
    res.render('admin/login', {
      layout: 'admin/layout',
      error: true
    });
  }
});

// Cerrar sesión
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

module.exports = router;
