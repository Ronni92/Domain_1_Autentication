const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Registro de usuario escuchando en puerto ${PORT}`);
});
const { swaggerUi, specs } = require('./swagger');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

