const express = require("express");
const router = express.Router();

const profesores = [
  { nombre: "Dr. Palma", numeroEmpleado: "P001" },
  { nombre: "Ing. Ramírez", numeroEmpleado: "P002" },
  { nombre: "Mtra. Fernández", numeroEmpleado: "P003" },
  { nombre: "Mtro. Herrera", numeroEmpleado: "P004" }
];

router.get("/", (req, res) => res.json(profesores));

module.exports = router;
