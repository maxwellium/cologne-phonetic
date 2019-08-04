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
];
test('colognePhonetic', () => {
    for (const [phrase, kph] of FIXTURES) {
        expect(src_1.colognePhonetic(phrase)).toBe(kph);
    }
});
//# sourceMappingURL=index.test.js.map