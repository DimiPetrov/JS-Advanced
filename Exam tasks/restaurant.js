const { times } = require("lodash");

class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for(let product of products) {
           let productInfo = product.split(' ');
           let productName = productInfo[0];
           let productQuantity = productInfo[1];
           let productTotalPrice = productInfo[2];

           if(productTotalPrice <= this.budgetMoney) {
               if(this.stockProducts[productName] === undefined) {
                this.stockProducts[productName] = productQuantity;
               } else {
                this.stockProducts[productName] += productQuantity;  
               }
                this.budgetMoney -= productTotalPrice;
                console.log(`Successfully loaded ${productQuantity} ${productName}\n`);
           } else {
               console.log(`There was not enough money to load ${productQuantity} ${productName}\n`);
           }
        }

    }

    addToMenu(meal, neededProducts, price) {
        if(this.menu[meal] === undefined) {
            this.menu[meal] = {
                'products': neededProducts,
                'price': price
            };

            if(this.menu.length === 1) {
                console.log(`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`);
            } else {
                console.log(`Great idea! Now with the ${meal} we have ${this.menu.length} meals in the menu, other ideas?`);
            }
        } else {
            console.log(`The ${meal} is already in the our menu, try something different.`);
        }
    }

    showTheMenu() {
        if(this.menu.length === 0) {
            console.log(`Our menu is not ready yet, please come later...`);
        } else {
            for(let [mealName, description] of Object.entries(menu)) {
                let price = description.price;
                console.log(`${mealName} - $ ${price}`);
            }
        }
    }

    makeTheOrder(orderedMealName) {
        let isFound = false;
        let neededProducts = [];
        for(let [mealName, description] of Object.entries(this.menu)) {            
            if(mealName === orderedMealName) {
                isFound = true;
                neededProducts = description.products;
                break;
            }
        }

        if(!isFound) {
            console.log(`There is not ${orderedMealName} yet in our menu, do you want to order something else?`);
        } else {
            let hasAllNeededProducts = true;
            for(let neededProduct of neededProducts) {
                let productInfo = neededProduct.split(' ');
                let productName = productInfo[0];
                let productQuantity = productInfo[1];

                if(this.stockProducts[productName] !== undefined && this.stockProducts[productName] >= productQuantity) {
                    continue;
                } else {
                    hasAllNeededProducts = false;
                    break;
                }
            }

            if(hasAllNeededProducts) {
                console.log(`Your order (${orderedMealName}) will be completed in the next 30 minutes and will cost you ${this.menu[orderedMealName].price}.`);
            } else {
                console.log(`For the time being, we cannot complete your order (${orderedMealName}), we are very sorry...`);
            }
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


