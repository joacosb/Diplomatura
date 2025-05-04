const express = require('express');
const router = express.Router();
const empleadosModel = require('../../models/empleadosModel');
const md5 = require('md5');

router.get('/', (req, res) => {
  res.render('layout/admin/login', {
    layout: 'layout/admin/layout'
  });
});

router.post('/', async (req, res) => {
  const { usuario, password } = req.body;
  const empleado = await empleadosModel.getByUserAndPass(usuario, md5(password));

  if (empleado) {
    req.session.id_empleado = empleado.id_emp;
    req.session.nombre = empleado.nombre;
    res.redirect('/admin/novedades');
  } else {
    res.render('layout/admin/login', {
      layout: 'layout/admin/layout',
      error: true
    });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

module.exports = router;
