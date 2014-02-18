var
  substitute = [
    [ /ä/g                ,  'a'  ],
    [ /ö/g                ,  'o'  ],
    [ /ü/g                ,  'u'  ],
    [ /ß/g                ,  's'  ],
    [ /[^a-z]/g           ,  ''   ]
  ],

  rules = [
    [ /[dt](?![csz])/g    , '2'   ], // [csz] are replaced soon, so this
    [ /[dt](?=[csz])/g    , '8'   ], // needs to exec early
    [ /[ckq]x/g           , '88'  ],
    [ /[sz]c/g            , '88'  ], // double digits will be reduced later -- but this is easier to debug ;)

    [ /^c(?=[ahkloqrux])/ , '4'   ],
    [ /^c/                , '8'   ],
    [ /c(?=[ahkoqux])/g   , '4'   ], // no lookbehind regex :( -- (?<![sz])c

    [ /x/g                , '48'  ],

    [ /p(?!h)/g           , '1'   ],
    [ /p(?=h)/g           , '3'   ],

    // simple rules -- final

    [ /h/g                , ''    ],
    [ /[aeijouy]/g        , '0'   ],
    [ /b/g                , '1'   ],
    [ /[fvw]/g            , '3'   ],
    [ /[gkq]/g            , '4'   ],
    [ /l/g                , '5'   ],
    [ /[mn]/g             , '6'   ],
    [ /r/g                , '7'   ],
    [ /[sz]/g             , '8'   ],
  ],

  modifiers = [
    [ /\B0/g              , ''    ], // remove 0s except for first char
    [ /[^\w\s]|(.)(?=\1)/g, ''    ]  // reduce consecutive duplicates to one
  ];


module.exports = function(phrase){
  phrase = (''+ phrase).toLowerCase();

  substitute.concat( rules, modifiers ).forEach(function( rule ){
    phrase = phrase.replace( rule[0], rule[1] );
  });

  return phrase;
};