import { colognePhonetic } from '../src/index.js';

const FIXTURES: [phrase: string, expected: string][] = [
  ['müller', '657'],
  ['schmidt', '862'],
  ['schneider', '8627'],
  ['fischer', '387'],
  ['Wikipedia', '3412'],
  ['Müller-Lüdenscheidt', '65752682'],
  ['Breschnew', '17863'],
  ['Meier', '67'],
  ['Mayr', '67'],
  ['Maier', '67'],
  ['C', '8'],
  ['Carl', '475'],
  ['Marcel', '6785'],
  ['Ärger', '0747'],
  ['Aerger', '0747'],
  ['Erker', '0747'],
  ['Dominic', '2664'], // would be 2668 according to strict algorithm
  ['Dominik', '2664'],
  ['Chillischote', '4582'],
  ['Manchester', '664827'],
  ['Arche', '074'],
  ['Hand', '062'],
  ['FIFA', '33'],
  ['ADAC', '024'],  // would be 028 according to strict algorithm
  ['Hai', '0'],
  ['Didi', '22'],
  ['Fix', '348'],
  ['Fixx', '34848'],
  ['XXL', '48485'],
  ['Woodcock', '3844'],
  ['Schüßler', '8857'],
  ['Schuessler', '8857'],
  ['Schussler', '8857'],
  ['Fußgänger', '384647'],
  ['Fussgaenger', '384647'],
];


console.log('\x1b[1m', 'testing colognePhonetic', '\x1b[0m');
let hasErrored = false;

for (const [phrase, expected] of FIXTURES) {

  const actual = colognePhonetic(phrase);

  if (actual === expected) {
    console.log('\x1b[32m', ` ✔ passed fixture "${phrase}"`, '\x1b[0m');
  } else {
    console.error('\x1b[31m', ` ✖ "${phrase}" did not yield "${expected}" but "${actual}"`, '\x1b[0m');
    hasErrored = true;
  }

}

if (hasErrored) { throw new Error('Some tests did not pass!'); }
