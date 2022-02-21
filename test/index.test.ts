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
  [ 'C'                  , '8'        ],
  [ 'Carl'               , '475'      ],
  [ 'Marcel'             , '6785'     ],
  [ 'Ärger'              , '0747'     ],
  [ 'Aerger'             , '0747'     ],
  [ 'Erker'              , '0747'     ],
  [ 'Dominic'            , '2664'     ], // would be 2668 according to strict algorithm
  [ 'Dominik'            , '2664'     ],
  [ 'Chillischote'       , '4582'     ],
  [ 'Manchester'         , '664827'   ],
  [ 'Arche'              , '074'      ],
  [ 'Hand'               , '062'      ],
  [ 'FIFA'               , '33'       ],
  [ 'ADAC'               , '024'      ],  // would be 028 according to strict algorithm
  [ 'Hai'                , '0'        ],
  [ 'Didi'               , '22'       ],
  [ 'Fix'                , '348'      ],
  [ 'Fixx'               , '34848'    ],
  [ 'XXL'                , '48485'    ],
];

test( 'colognePhonetic', () => {
  for ( const [ phrase, kph ] of FIXTURES ) {

    expect(
      colognePhonetic( phrase )
    ).toBe( kph );
    
  }
} );
