const describe = require('mocha').describe;
const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {

    describe('add', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isNaN(mathEnforcer.addFive(NaN));
        });

        it('add properly', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(1), 6);
        });
    });

    describe('subtract', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });

        it('subtract properly', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.2);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        });
    });
});