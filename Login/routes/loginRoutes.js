router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const pool = require("../db");


  // Validación sencilla de prueba (puedes luego conectar con la BD)
  if (email === "admin@email.com" && password === "1234") {
    return res.status(200).json({ success: true, message: "Login exitoso" });
  } else {
    return res.status(401).json({ success: false, message: "Credenciales inválidas" });
  }
});
