const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.id_empleado) {
    return res.redirect('/admin/login');
  }

  res.render('novedades', {
    nombre: req.session.nombre
  });
});

module.exports = router;
