"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
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
    ['Dominic', '2664'],
    ['Dominik', '2664'],
    ['Chillischote', '4582'],
    ['Manchester', '664827'],
    ['Arche', '074'],
];
test('colognePhonetic', () => {
    for (const [phrase, kph] of FIXTURES) {
        expect((0, src_1.colognePhonetic)(phrase)).toBe(kph);
    }
});
//# sourceMappingURL=index.test.js.map