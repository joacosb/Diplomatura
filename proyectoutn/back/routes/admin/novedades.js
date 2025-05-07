const express = require('express');
const router = express.Router();
const novedadesModel = require('../../models/novedadesModel');

// Listar
router.get('/', async (req, res) => {
  const novedades = await novedadesModel.getNovedades();
  res.render('novedades', {
    nombre: req.session.nombre,
    novedades
  });
});

// Eliminar
router.get('/eliminar/:id', async (req, res) => {
  await novedadesModel.deleteNovedadById(req.params.id);
  res.redirect('/admin/novedades');
});

router.get('/agregar', (req, res) => {
  res.render('agregar', {
    layout: 'main'
  });
});


router.post('/agregar', async (req, res) => {
  const { titulo, cuerpo } = req.body;

  if (titulo && cuerpo) {
    await novedadesModel.addNovedad({ titulo, cuerpo });
    res.redirect('/admin/novedades');
  } else {
    res.render('agregar', {
      error: true,
      message: 'Todos los campos son obligatorios'
    });
  }
});

// Editar
router.get('/editar/:id', async (req, res) => {
  const novedad = await novedadesModel.getNovedadById(req.params.id);
  res.render('modificar', { novedad });
});

router.post('/editar', async (req, res) => {
  const { id, titulo, cuerpo } = req.body;

  try {
    await novedadesModel.updateNovedadById(id, { titulo, cuerpo });
    res.redirect('/admin/novedades');
  } catch (err) {
    console.error(err);
    res.render('modificar', {
      error: true,
      message: 'No se pudo modificar la novedad',
      novedad: { id, titulo, cuerpo }
    });
  }
});

module.exports = router;


//COn esto defino un router para manejar novedades desde el panel de admin Incluye rutas para listar, agregar, y elimnar novedades. Interactua con el modelo de novedades justamente que maneja la bd.