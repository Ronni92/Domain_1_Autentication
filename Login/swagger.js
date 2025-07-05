const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Login Microservice API",
      version: "1.0.0",
      description: "API para autenticación de usuarios",
    },
    servers: [
      {
        url: "http://localhost:3000", // Cambia si usas otro puerto
      },
    ],
  },
  apis: ["./routes/*.js"],// Ajusta la ruta según tu estructura
};

const swaggerSpec = swaggerJsDoc(options);
function swaggerDocs(app) {
  app.use("/docs/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
