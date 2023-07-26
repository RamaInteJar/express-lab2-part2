const express = require('express');
const app = express();
const PORT = 3000; // You can change the port as needed

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs', { bottles: 99 });
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  res.render('bottles.ejs', { bottles: numberOfBottles });
});

app.listen(PORT, () => {
  console.log(`Server is running on local host ${PORT}`);
});
