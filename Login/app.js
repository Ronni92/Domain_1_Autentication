const express = require("express");
const app = express();
const swaggerDocs = require("./swagger");

app.use(express.json());
swaggerDocs(app); // activa /docs

// Aquí puedes agregar tus rutas, ejemplo:
app.get("/", (req, res) => res.send("Login funcionando"));

// IMPORTANTE: escucha en el puerto correcto
app.listen(3000, "0.0.0.0", () => {
  console.log("Login service corriendo en http://0.0.0.0:3000");
});
const loginRoutes = require("./routes/loginRoutes");
app.use("/", loginRoutes);
