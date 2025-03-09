const express = require("express");
const app = express();

// Importar rutas
const alumnosRoutes = require("./routes/alumnos");
const profesoresRoutes = require("./routes/profesores");

// Definir rutas principales
app.use("/alumnos", alumnosRoutes);
app.use("/profesores", profesoresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SICEI corriendo en puerto ${PORT}`));
