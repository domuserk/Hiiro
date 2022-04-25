const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.end('Aqui');
})

app.listen(3000, () => console.log('working'))