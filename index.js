const express = require("express");

const app = express();
app.use(express.json());


// POST
app.post("/api/multiplicacion/:multiplicador?", (req, res) => {
  const { arreglo } = req.body;
  const { multiplicador } = req.params

  const multiplicacion = arreglo.map((numero) => multiplicador ? numero * multiplicador: numero * 1);

  res.json({
    arreglo: arreglo,
    multiplicador: multiplicador,
    multiplicacion: multiplicacion,
  });
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
