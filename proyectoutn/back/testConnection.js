const pool = require('./db');

async function test() {
  try {
    const res = await pool.query('SELECT * FROM empleados');
    console.table(res.rows); // Muestra como tabla en la terminal
  } catch (err) {
    console.error('Error al consultar empleados:', err);
  }
}

test();
