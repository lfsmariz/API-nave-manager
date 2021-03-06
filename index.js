const express = require('express');

const app = express();

// Constantes
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello luiz');
});

app.listen(PORT);
