const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const FILE = './count.json';

function getCount() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify({ count: 87 }));
  }
  return JSON.parse(fs.readFileSync(FILE)).count;
}

function setCount(count) {
  fs.writeFileSync(FILE, JSON.stringify({ count: count }));
}

app.get('/', function (req, res) {
  res.send('Plush counter is running!');
});

app.get('/plush', function (req, res) {
  var count = getCount();
  count++;
  setCount(count);
  res.send('Plush count is now ' + count);
});

app.get('/plushcount', function (req, res) {
  var count = getCount();
  res.send('Current plush count: ' + count);
});

app.listen(PORT, function () {
  console.log('Running on port ' + PORT);
});
