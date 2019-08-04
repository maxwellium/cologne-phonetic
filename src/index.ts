import { colognePhonetic } from 'cologne-phonetic';

const input = <HTMLInputElement> document.getElementById( 'input' );
const output = <HTMLPreElement> document.getElementById( 'output' );
const renderColognePhonetic = () => output.innerText = input.value.split( '\n' ).map( colognePhonetic ).join( '\n' );

input.addEventListener( 'input', renderColognePhonetic );
renderColognePhonetic();