import { useState } from 'react';
import axios from 'axios';
import '../style/pages/LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ usuario: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/admin/login/api/login', formData, {
        withCredentials: true
      });
      if (res.data.success) {
        // Redirige fuera del entorno React al panel clásico
        window.open('http://localhost:3000/admin/novedades', '_blank');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      console.error(err);
      setError('Error al iniciar sesión');
    }
  };
  
  return (
    <main className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="titulo-principal">Iniciar Sesión</h2>
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </main>
  );
};

export default LoginPage;
