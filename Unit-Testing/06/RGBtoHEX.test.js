const { expect } = require('chai');
const { iteratee } = require('lodash');
console.log("Test");

describe('RGBtoHEX', () => {
    it('converts black to hex', () => {
        expect(RBGtoHEX(0, 0, 0).to.equal('#000000'));
    });

    it('converts white to hex', () => {
        expect(RBGtoHEX(255, 255, 255).to.equal('#FFFFFF'));
    });

    it('returns undefined for string params', () => {
        expect(RBGtoHEX('a', 'a', 'a')).to.be.undefined;
    });
});