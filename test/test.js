var
  assert  = require('assert'),
  cologne = require('../index.js');

var
  phrases = [
    [ 'müller'              , '657'     ],
    [ 'schmidt'             , '862'     ],
    [ 'schneider'           , '8627'    ],
    [ 'fischer'             , '387'     ],
    [ 'Wikipedia'           , '3412'    ],
    [ 'Müller-Lüdenscheidt' , '65752682']
  ],
  same = [ 'Meier Mayr Maier', '67' ];


describe('ColognePhonetic', function(){

  it('should correctly process German words', function(){

    phrases.forEach(function( phrase ){
      assert.equal( phrase[1], cologne(phrase[0]) );
    });
  });

});

describe('ColognePhonetic', function(){

  it('should detect same pronunciation despite differing spelling', function(){

    same[0].split(' ').forEach(function( phrase ){
      assert.equal( same[1], cologne(phrase) );
    });
  });

});