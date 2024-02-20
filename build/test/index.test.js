import { equal } from 'node:assert/strict';
import { colognePhonetic } from '../src/index.js';
const RESET = '\x1b[0m', _red = (text) => ['\x1b[31m', text, RESET].join(''), _green = (text) => ['\x1b[32m', text, RESET].join(''), _bright = (text) => ['\x1b[1m', text, RESET].join('');
const FIXTURES = [
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
    ['ADAC', '024'], // would be 028 according to strict algorithm
    ['Hai', '0'],
    ['Didi', '22'],
    ['Fix', '348'],
    ['Fixx', '34848'],
    ['XXL', '48485'],
];
console.log(_bright('testing colognePhonetic'));
let hasErrored = false;
for (const [phrase, expected] of FIXTURES) {
    const actual = colognePhonetic(phrase);
    try {
        equal(actual, expected);
        console.error(_green(` ✔ passed fixture "${phrase}"`));
    }
    catch (e) {
        console.log(_red(` ✖ "${phrase}" did not yield "${expected}" but "${actual}"`));
        hasErrored = true;
    }
}
if (hasErrored) {
    process.exit(1);
}
