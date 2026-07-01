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
'Another bloody plush joins the chaos! Total: {count}!',
'We have somehow adopted another fluffy bastard. Count: {count}!',
'The pile gets bigger because apparently self-control is dead. Plushies owned: {count}!',
'One more for the stupid little horde! Current count: {count}!',
'At this point, it is a full-blown plush infestation. Count: {count}!',
'The collection expands once again because why the hell not? Total plushies: {count}!',
'Nobody needs this many damn plushies... now at {count}!',
'Yet another plush has been dragged into this nonsense! Count: {count}!',
'The plush empire now consists of {count} tiny idiots!',
'Resistance is fucking futile. Plush total: {count}!',
'Breaking news: the plush mountain has reached a ridiculous {count}!',
'The plush budget is crying and screaming as the count hits {count}!',
'There is apparently always room for one more bloody plush... total: {count}!',
'The army recruits another fuzzy little gremlin! Count: {count}!',
'This is getting completely out of hand. We now have {count} plushies, for fuck’s sake!',
'The plush kingdom grows stronger and our bank account grows weaker. Population: {count}!',
'An entirely unreasonable number of plushies: {count}.',
'We are absolutely never financially recovering from plush number {count}.',
'Plush acquired! Current cuddle capacity is a concerning {count}!',
'Another one? Seriously? What the hell is wrong with us? Count is now {count}!',
'The collection demands another sacrifice. Plush total: {count}!',
'Alert: plush containment has catastrophically failed. Count: {count}!',
'The soft legion increases to a frankly stupid {count}!',
'One step closer to being buried alive in plushies. Total: {count}!',
'The plush addiction counter now reads: {count}. Seek help.',
'The nest grows fluffier and more unhinged. Plush count: {count}!',
'Our stockpile of softness has reached an alarming {count}!',
'The plush gods are pleased and probably judging us. Total offerings: {count}!',
'At {count} plushies, this is no longer a hobby, it is a goddamn lifestyle.',
'Another comrade enters the plush dimension because apparently we learned nothing. Count: {count}!'
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
