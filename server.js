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
 'Another fucking plush joins the pile of bad decisions! Total: {count}!',
'We have acquired another fluffy little bastard. Count: {count}!',
'The pile gets bigger because apparently we are incapable of saying "no". Plushies owned: {count}!',
'One more for the cuddly army of idiots! Current count: {count}!',
'At this point, this is a plush infestation, you daft cunt. Count: {count}!',
'The collection expands once again because we're all fucking enablers. Total plushies: {count}!',
'Yet another plush has been dragged into this madness. Count: {count}!',
'The plush empire now consists of {count} fluffy little fuckers!',
'Resistance is fucking futile. Plush total: {count}!',
'Breaking news: the plush mountain has become a fucking hazard at {count}!',
'The plush budget is dead, buried, and being pissed on. Count: {count}!',
'There is somehow room for one more stupid little bastard... total: {count}!',
'The army recruits another tiny gremlin. Count: {count}, for fuck's sake!',
'This is getting out of hand, you bunch of lunatics. We now have {count} plushies!',
'The plush kingdom grows stronger while our bank account gets absolutely shafted. Population: {count}!',
'An entirely unreasonable number of plushies: {count}, you mad cunts.',
'We are never financially recovering from this shit. Plush number {count}!',
'Plush acquired! Current cuddle capacity: too fucking many ({count})!',
'Another one? Really? Are you taking the piss? Count is now {count}!',
'The collection demands another sacrifice, and apparently it's our wallet. Plush total: {count}!',
'Alert: plush containment has failed. We're all fucked. Count: {count}!',
'The soft legion increases to {count} fluffy bastards!',
'One step closer to being crushed under a mountain of stuffed shite. Total: {count}!',
'The plush addiction counter now reads: {count}. Seek help, you weird fucks.',
'The nest grows fluffier and somehow more deranged. Plush count: {count}!',
'Our stockpile of softness has reached a frankly stupid {count}!',
'The plush gods are pleased, the weird little cunts. Total offerings: {count}!',
'At {count} plushies, this has become a full-time fucking problem.',
'Another comrade enters the plush dimension because apparently we enjoy making terrible decisions. Count: {count}!',
'Congratulations, you absolute wanker, you've got {count} plushies now!',
'The plush goblins have claimed another victim. Total: {count}!',
'The hoard grows. One day these little fuckers will overthrow us. Count: {count}!',
'You bought another one? You daft bastard. Total plushies: {count}!',
'The plush pile has reached {count}. This is some unhinged collector bullshit now!',
'Another fuzzy cunt has joined the gang. Count: {count}!',
'We're {count} plushies deep and still making catastrophically bad choices!',
'At {count} plushies, the intervention should've happened ages ago!',
'The army of fluffy bastards now numbers {count}!',
'For reasons nobody understands, we now own {count} plushies. Fucking brilliant.'
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
