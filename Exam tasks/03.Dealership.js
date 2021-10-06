

const { assert } = require("chai");

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

describe('dealership', function () {
    describe('newCarCost', function () {
        it('return old car', function () {
            assert.equal(dealership.newCarCost('a', 1), 1);
            assert.equal(dealership.newCarCost('Audi A6 4K', 30000), 10000);          
        });
    });

    describe('car equipment', function () {
        it('added extras', function () {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 3]), ['a', 'd']);
        });
    });

    describe('euro category', function () {
        it('category3', function () {
            assert.equal(dealership.euroCategory(3),
            'Your euro category is low, so there is no discount from the final price!');
        });
        it('euro category4', () => {
            assert.equal(dealership.euroCategory(4),
                `We have added 5% discount to the final price: 14250.`);
        });
        it('euro category5', () => {
            assert.equal(dealership.euroCategory(4),
                `We have added 5% discount to the final price: 14250.`);
        });
    });
});
