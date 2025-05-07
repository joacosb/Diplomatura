const pool = require('../db');

async function getNovedades() {
  const result = await pool.query('SELECT * FROM novedades ORDER BY id DESC');
  return result.rows;
}

async function addNovedad(data) {
  const query = 'INSERT INTO novedades (titulo, cuerpo) VALUES ($1, $2)';
  await pool.query(query, [data.titulo, data.cuerpo]);
}

async function deleteNovedadById(id) {
  await pool.query('DELETE FROM novedades WHERE id = $1', [id]);
}

async function getNovedadById(id) {
  const result = await pool.query('SELECT * FROM novedades WHERE id = $1', [id]);
  return result.rows[0];
}

async function updateNovedadById(id, data) {
  const query = 'UPDATE novedades SET titulo = $1, cuerpo = $2 WHERE id = $3';
  await pool.query(query, [data.titulo, data.cuerpo, id]);
}

module.exports = {
  getNovedades,
  addNovedad,
  deleteNovedadById,
  getNovedadById,
  updateNovedadById
};
