const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Registro de usuario escuchando en puerto ${PORT}`));

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor Register activo en el puerto 3000");
});
