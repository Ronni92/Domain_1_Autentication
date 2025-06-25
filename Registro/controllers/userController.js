const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña son obligatorios" });
  }

  try {
    const userExistente = await User.findByEmail(email);
    if (userExistente) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser(email, hashedPassword);

    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (err) {
    console.error("Error detallado:", err.message);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};
