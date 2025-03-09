const express = require("express");
const app = express();

// Importar rutas
const alumnosRoutes = require("./routes/routes_alumnos");
const profesoresRoutes = require("./routes/routes_profesores");

// Definir rutas principales
app.use("/alumnos", alumnosRoutes);
app.use("/profesores", profesoresRoutes);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`SICEI corriendo en puerto ${PORT}`));
