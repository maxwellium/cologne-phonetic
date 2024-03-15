import { colognePhonetic } from '../node_modules/cologne-phonetic/build/src/index.js';

const input = <HTMLInputElement>document.getElementById('input');
const output = <HTMLInputElement>document.getElementById('output');

function renderColognePhonetic() {

  const phrases = input.value.split('\n');

  input.setAttribute('rows', String(phrases.length));
  output.setAttribute('rows', String(phrases.length));

  output.value = phrases.map(colognePhonetic).join('\n');
}

input.addEventListener('input', renderColognePhonetic);
renderColognePhonetic();