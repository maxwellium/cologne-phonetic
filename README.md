# Kölner Phonetik
Soundex-like algorithm for German language. Reduces phrases to their phonetic stem.

see [Wikipedia](https://en.wikipedia.org/wiki/Cologne_phonetics) ([or in German](https://de.wikipedia.org/wiki/K%C3%B6lner_Phonetik))

## Try it
https://maxwellium.github.io/cologne-phonetic/

## Usage
```javascript
import { equal } from 'node:assert/strict';
import { colognePhonetic } from 'cologne-phonetic';

const FIXTURES = [
  [ 'müller'             , '657'      ],
  [ 'schmidt'            , '862'      ],
  [ 'schneider'          , '8627'     ],
  [ 'fischer'            , '387'      ],
  [ 'Wikipedia'          , '3412'     ],
  [ 'Müller-Lüdenscheidt', '65752682' ],
  [ 'Breschnew'          , '17863'    ],
  [ 'Meier'              , '67'       ],
  [ 'Mayr'               , '67'       ],
  [ 'Maier'              , '67'       ],
];

for ( const [ input, expected ] of FIXTURES ) {
  strictEqual( colognePhonetic( input ), expected );
}
```

## License
This project is licensed under the terms of the MIT license.

Copyright (c) 2019 **Max Dancau**