import { colognePhonetic } from '../src';

const FIXTURES: [ string, string ][] = [
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

test( 'colognePhonetic', () => {
  for ( const [ phrase, kph ] of FIXTURES ) {

    expect(
      colognePhonetic( phrase )
    ).toBe( kph );
    
  }
} );
