const express = require('express');
const path = require('path');

const random = require('./utils/random.js').random;

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get(/^\/random\/(\d+)\/(\d+)/, (req, res) => {
  const [min, max] = [req.params[0], req.params[1]];
  res.json({ result: random(parseInt(min), parseInt(max))});
});

app.get(/^\/random\//, (req, res) => {
  res.json({ result: 'Incorrect input' });
});

app.listen(port, () => {
  console.log(`Application is running on port ${port} ...`);
});
