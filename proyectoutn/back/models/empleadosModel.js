const pool = require('../db');

async function getByUserAndPass(usuario, password) {
  try {
    const query = 'SELECT * FROM empleados WHERE usuario = $1 AND password = $2 LIMIT 1';
    const result = await pool.query(query, [usuario, password]);
    return result.rows[0];
  } catch (err) {
    console.error('Error en modelo empleadosModel:', err);
    return null;
  }
}
module.exports = { getByUserAndPass };
