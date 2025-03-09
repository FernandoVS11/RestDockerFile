const express = require("express");
const router = express.Router();

const alumnos = [
  { nombre: "Juan Villajuana", matricula: "A12345" },
  { nombre: "María Maderra", matricula: "B67890" },
  { nombre: "Carlos Sánchez", matricula: "C54321" },
  { nombre: "Ana Torres", matricula: "D98765" }
];

router.get("/", (req, res) => res.json(alumnos));

module.exports = router;
