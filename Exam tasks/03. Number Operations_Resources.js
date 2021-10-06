const {
    assert
} = require("chai");

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe('numberOperations', function () {
    describe('powNumber', function () {
        it('should power a number', function () {
            assert.strictEqual(numberOperations.powNumber(10), 100);
            assert.isNaN(numberOperations.powNumber(NaN));
        });
    });

    describe('numberChecker', function () {
        it('should confirm the input is a number', function () {
            assert.throw(() => numberOperations.numberChecker('abc'), Error, 'The input is not a number!');
        });
        it('should confirm the input is a number less than 100', function () {
            assert.strictEqual(numberOperations.numberChecker(64), 'The number is lower than 100!');
        });
        it('should confirm the input is a number greater or equal to 100', function () {
            assert.strictEqual(numberOperations.numberChecker(110), 'The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', function () {
        it('should sum the index values ot two arrays', function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3, 4], [4, 5, 6]), [5, 7, 9, 4]);
        });
        it('Should return empty array when called with empty arrays', function () {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
        });
        it('Should return correct result when one parameter is an empty array', function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3]);
        });
    });

});