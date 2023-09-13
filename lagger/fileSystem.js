import fs from 'fs';

const quotes = [
  'Ich will meine Frau glücklich machen, und nicht mein Glück durch sie machen',
  'Die Musik steckt nicht in den Noten. Sondern in der Stille dazwischen',
  'Mein liebes Weibchen! Potsdam ist ein teurer Ort […] So musst Du Dich bei meiner Rückkehr schon mehr auf mich freuen als auf das Geld',
  'Verzeih mir, Eure Majestät. Ich bin ein vulgärer Mensch, aber ich versichere euch, Eure Majestät, meine Musik ist es nicht',
  'komponirt ist schon alles - aber geschrieben noch nicht',
  'Was ist noch schlimmer als eine Flöte? - Zwei Flöten',
  'Ein lediger Mensch lebt nur halb',
];

class Blob {
  constructor(quote) {
    this.quote = quote;
    this.date = new Date();
    this.author = 'W.A. Mozart';
  }
}

const blobs = quotes.map((quote) => new Blob(quote));

const createSingleFile = ({ quote }) => {
  const name = quote.split(' ')[0].toLowerCase();
  try {
    fs.writeFileSync(name, quote);
    console.log(`File "${name}" created successfully.`);
  } catch (error) {
    console.error(`Error creating file "${name}":`, error);
  }
};

blobs.forEach((blob) => createSingleFile(blob));

