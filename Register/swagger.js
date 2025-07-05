const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Register Microservice API",
      version: "1.0.0",
      description: "API para registro de usuarios",
    },
    servers: [
      {
        url: "http://localhost:80", // Cambia a tu IP pública en producción si deseas
      },
    ],
  },
  apis: ["./routes/*.js"], // Ruta donde están los comentarios Swagger
};

const swaggerSpec = swaggerJsDoc(options);

// Función para aplicar Swagger en la app Express
function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
