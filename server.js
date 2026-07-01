```js
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

app.get('/', (req, res) => {
  res.send('Plush counter is running! Use /plush or /plushcount');
});

const plushMessages = [
  'Another fucking plush?! Are you taking the piss? Total: {count}, you absolute cunt!',
  'We bought another fluffy little bastard because apparently financial stability can get fucked. Count: {count}!',
  'The pile gets bigger and our sanity gets smaller. Plushies owned: {count}, you mad fucks!',
  'One more for the army of cuddly dickheads! Current count: {count}!',
  'At this point the plushies have rights and we fucking don’t. Count: {count}!',
  'The collection expands once again because we\'re apparently addicted to buying stuffed shite. Total plushies: {count}!',
  'Nobody needs this many plushies, you deranged little goblin. Now at {count}!',
  'Yet another plush has joined the cult. Count: {count}. We\'re fucked.',
  'The plush empire now consists of {count} fluffy little cunts and one exhausted owner!',
  'Resistance is fucking futile. The plushes have won. Total: {count}!',
  'Breaking news: the plush mountain has reached {count} and is now visible from space!',
  'The plush budget has been dragged into an alley and beaten to death. Count: {count}!',
  'There is always room for one more, said the lying bastard with {count} plushies!',
  'The army recruits another fuzzy idiot. Count: {count}. God help us all.',
  'This is getting out of hand. We now have {count} plushies and precisely zero self-respect!',
  'The plush kingdom grows stronger while our wallet curls into a ball and cries. Population: {count}!',
  'An entirely batshit number of plushies: {count}.',
  'We are never financially recovering from this bollocks. Plush number {count}!',
  'Plush acquired! Current cuddle capacity: fuck knows, probably {count}!',
  'Another one? Really? Have you completely lost the fucking plot? Count is now {count}!',
  'The collection demands tribute and apparently that tribute is every spare penny we own. Plush total: {count}!',
  'Alert: plush containment has failed. Evacuate the fucking building. Count: {count}!',
  'The soft legion increases to {count} fluffy bastards and one very poor owner!',
  'One step closer to being crushed to death by stuffed animals. Total: {count}!',
  'The plush addiction counter now reads: {count}. Touch grass, you weird cunt.',
  'The nest grows fluffier and somehow more unhinged. Plush count: {count}!',
  'Our stockpile of softness has reached {count}. This is a cry for help.',
  'The plush gods are pleased and demand further sacrifices, the greedy little shits. Total offerings: {count}!',
  'At {count} plushies this has officially become a fucking lifestyle choice.',
  'Another comrade enters the plush dimension because apparently consequences aren\'t real. Count: {count}!',
  'Congratulations, you absolute weapon, you now own {count} plushies.',
  'The hoard grows larger. Soon these little fuckers will start paying council tax. Count: {count}!',
  'You bought another one? You magnificent idiot. Total plushies: {count}!',
  'The plush pile has reached {count}. This is no longer collecting; this is a hostage situation.',
  'Another fuzzy cunt has joined the gang. Count: {count}. Lock your doors.',
  'We\'re {count} plushies deep and still digging. Outstandingly stupid behaviour.',
  'At {count} plushies, an intervention isn\'t enough. We need an exorcism.',
  'The army of fluffy bastards now numbers {count}. They could stage a coup.',
  'For reasons known only to Satan, we now own {count} plushies.',
  'Plush number {count} has arrived. The bank account is dead and we\'re dancing on its grave.',
  'The collection has reached {count}. The plushies are the landlords now.',
  'Every time the count goes up, an accountant bursts into tears. Current total: {count}!',
  'Another plush has been acquired. You greedy little shit. Count: {count}!',
  'At {count} plushies, we\'re one bad day away from opening a fucking zoo.',
  'The fluffy bastard population has risen to {count}. Containment is impossible.',
  'Congratulations! You\'ve reached {count} plushies and unlocked the achievement: "Terminal Plush Goblin".',
  'The plush count is now {count}. Seek professional help, you absolute nutter.',
  'Another one for the pile of soft idiots. Count: {count}. What the fuck are we doing?',
  'We\'ve hit {count} plushies. The credit card is screaming and honestly, fair enough.',
  '{count} plushies. That\'s not a collection anymore, that\'s a fucking infestation.'
];



app.get('/plush', (req, res) => {
  let count = getCount();
  count++;
  setCount(count);

  const message =
    plushMessages[Math.floor(Math.random() * plushMessages.length)]
      .replace('{count}', count);

  res.send(message);
});

app.get('/plushcount', (req, res) => {
  const count = getCount();

  const countMessages = [
    `This fucking streamer has ${count} goddamn plushies.`,
    `Why the fuck do you want to know? She has ${count}, you nosy bastard.`,
    `${count} plushies. That's an absurd amount of stuffed shit.`,
    `${count} plushies and somehow she still wants more. Fucking unbelievable.`,
    `There are ${count} plushies. At this point it's a plush-based economy.`,
    `${count} plushies. Somebody stage a fucking intervention.`,
    `Yep, it's ${count}. Stop asking and go do something productive.`,
    `${count} plushies. The collection has officially gone off the fucking rails.`,
    `The answer is ${count}. Happy now, you curious little gremlin?`,
    `${count} plushies. Frankly, it's getting ridiculous.`,
    `A staggering ${count} plushies currently inhabit this streamer's lair.`,
    `${count} plushies. One day they'll achieve sentience and unionise.`,
    `There are ${count} plushies. No, I don't know where she puts them all.`,
    `${count} plushies. That's a metric fuckton of fluff.`,
    `${count} plushies and counting. God help us all.`,
    `Current plush count: ${count}. Touch some grass and stop checking every five minutes.`,
    `${count} plushies. The addiction is real.`,
    `It's ${count}, you absolute menace.`,
    `${count} plushies. The pile grows ever larger and more terrifying.`,
    `Oh for fuck's sake, it's ${count} plushies.`
  ];

  const message =
    countMessages[Math.floor(Math.random() * countMessages.length)];

  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
```
