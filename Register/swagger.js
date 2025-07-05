const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Register API',
      version: '1.0.0',
      description: 'API para registro de usuarios',
    },
  },
  apis: ['./routes/*.js'], // <--- tus rutas documentadas aquí
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
