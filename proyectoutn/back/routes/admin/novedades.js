const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.id_empleado) {
    return res.redirect('/admin/login');
  }

  res.render('admin/novedades', {
    layout: 'admin/layout',
    nombre: req.session.nombre
  });
});

module.exports = router;
