// ============================================================
// VU Suministros & Servicios — backend del formulario de contacto
// Express + Nodemailer (SMTP de Gmail)
// ============================================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// ---- Middlewares base ----
app.use(express.json());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins.length ? allowedOrigins : '*'
}));

// Máximo 10 envíos por IP cada 15 minutos, para evitar spam/abuso
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { ok: false, error: 'Demasiados mensajes enviados. Intenta más tarde.' }
});

// ---- Transportador de correo (Gmail SMTP) ----
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,       // ej: tu_cuenta@gmail.com
    pass: process.env.GMAIL_APP_PASS    // contraseña de aplicación de Gmail
  }
});

// ---- Utilidad simple de validación ----
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---- Endpoint del formulario de contacto ----
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { nombre, email, servicio, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Correo electrónico no válido.' });
    }

    const destino = process.env.CONTACT_TO || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: `"Formulario VU Web" <${process.env.GMAIL_USER}>`,
      to: destino,
      replyTo: email,
      subject: `Nuevo mensaje desde la web — ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Servicio de interés:</strong> ${escapeHtml(servicio || 'No especificado')}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Error al enviar el correo:', err.message);
    res.status(500).json({ ok: false, error: 'No se pudo enviar el mensaje. Intenta más tarde.' });
  }
});

// ---- Verificación rápida de salud del servicio ----
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Servidor de contacto corriendo en el puerto ${PORT}`);
});
