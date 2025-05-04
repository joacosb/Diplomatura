const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.id_empleado) {
    return res.redirect('/admin/login');
  }

  res.render('layout/admin/novedades', {
    layout: 'layout/admin/layout',
    nombre: req.session.nombre
  });
});

module.exports = router;
