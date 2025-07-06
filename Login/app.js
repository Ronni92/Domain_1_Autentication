const express = require("express");
const cors = require("cors");           // ✅ Agregado
const app = express();

app.use(cors());                        // ✅ Agregado
app.use(express.json());

const swaggerDocs = require("./swagger");
swaggerDocs(app); // activa /docs

// Ruta base
app.get("/", (req, res) => res.send("Login funcionando"));

// Rutas de login
const loginRoutes = require("./routes/loginRoutes");
app.use("/", loginRoutes);

// Puerto de escucha
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor escuchando...");
});
