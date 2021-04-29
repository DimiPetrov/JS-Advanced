const {sum} = require('./myModule');
const {expect} = require('chai');

describe('Sum function', () => {
    it('works', () => {
       expect(sum(1, 2)).to.equal(3);
    });

    it('return NaN with invalid values', ()=> {
        expect(sum('a', 'a')).to.be.NaN;
    });
});