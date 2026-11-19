const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API para recepción de mensajes de cotización/contacto
app.post('/api/contacto', (req, res) => {
  const { nombre, email, telefono, condominio, unidades, mensaje } = req.body;
  console.log('📩 Nueva solicitud de cotización recibida:', {
    nombre,
    email,
    telefono,
    condominio,
    unidades,
    mensaje,
    fecha: new Date().toISOString()
  });

  // Respuesta exitosa simulada
  res.status(200).json({
    ok: true,
    message: 'Solicitud recibida exitosamente en KUBO Administración.'
  });
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🏢 KUBO Administración corriendo en http://localhost:${PORT}`);
});
