const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe('testNumbers', function() {
    describe('sumNumbers', function() {
        it('Should check if parameters are numbers', function() {
            assert.isNaN(testNumbers.sumNumbers(NaN));
        });
    });

    // describe('numberChecker', function() {
    //     it('Should correctly coerce input argument', function() {
    //         assert.strictEqual(numberOperations.numberChecker(3), 'The number is lower than 100!');
    //         assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!');
    //     });
    //     it('Should throw when passed an argument that coerces to NaN', function() {
    //         assert.throw(() => numberOperations.numberChecker('abc'), Error, 'The input is not a number!');
    //         assert.throw(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!');
    //         assert.throw(() => numberOperations.numberChecker('123b'), Error, 'The input is not a number!');
    //     });
    //     it('Should return correct string when argument is a valid number', function() {
    //         assert.strictEqual(numberOperations.numberChecker(99), 'The number is lower than 100!');
    //         assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
    //         assert.strictEqual(numberOperations.numberChecker(-100), 'The number is lower than 100!');
    //         assert.strictEqual(numberOperations.numberChecker(123.45), 'The number is greater or equal to 100!');
    //     });
    // });

    // describe('sumArrays', function() {
    //     it('Should return empty array when called with empty arrays', function() {
    //         assert.deepEqual(numberOperations.sumArrays([], []), []);
    //     });
    //     it('Should return correct result when one parameter is an empty array', function() {
    //         assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3]);
    //     });
    //     it('Should return correct result when both parameters are non empty equal length arrays', function() {
    //         assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [3, 5, 7]);
    //     });
    // });
});





