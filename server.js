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
  fs.writeFileSync(FILE, JSON.stringify({ count }));
}

const messages = [
  'Another plush joins the ranks! Total: {count}!',
'We have acquired yet another fluffy friend. Count: {count}!',
'The pile gets bigger... plushies owned: {count}!',
'One more for the horde! Current count: {count}!',
'At this point, it is an infestation. Plush count: {count}!',
'The collection expands once again! Total plushies: {count}!',
'Nobody needs this many plushies... now at {count}!',
'Yet another plush has been adopted! Count: {count}!',
'The plush empire now consists of {count} members!',
'Resistance is futile. Plush total: {count}!',
'Breaking news: the plush mountain has reached {count}!',
'The plush budget cries as the count hits {count}!',
'There is always room for one more... total: {count}!',
'The army recruits another soldier! Count: {count}!',
'This is getting out of hand. We now have {count} plushies!',
'The plush kingdom grows stronger! Population: {count}!',
'An entirely reasonable number of plushies: {count}.',
'We are never financially recovering from plush number {count}.',
'Plush acquired! Current cuddle capacity: {count}!',
'Another one? Really? Fine... count is now {count}!',
'The collection demands tribute. Plush total: {count}!',
'Alert: plush containment has failed. Count: {count}!',
'The soft legion increases to {count}!',
'One step closer to being buried in plushies. Total: {count}!',
'The plush addiction counter now reads: {count}!',
'The nest grows fluffier. Plush count: {count}!',
'Our stockpile of softness has reached {count}!',
'The plush gods are pleased. Total offerings: {count}!',
'At {count} plushies, this officially counts as a lifestyle.',
'Another comrade enters the plush dimension! Count: {count}!'
];

app.get('/plush', (req, res) => {
  let count = getCount();
  count++;
  setCount(count);

  const message =
    messages[Math.floor(Math.random() * messages.length)]
      .replace('{count}', count);

  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
