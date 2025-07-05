const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userroutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userroutes);
// IMPORTANTE: escucha en el puerto correcto
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor escuchando...");
});
const swaggerDocs = require('./swagger');
swaggerDocs(app); // Integración limpia