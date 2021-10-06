class ChristmasDinner {
    constructor(budget) {
        this.budget = Number(budget);
        if(this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([type, price]) {
        if(price > this.budget) {
            throw new Error(`Not enough money to buy this product`);
        } else {
            this.products.push(type);
            this.budget -= price;
            return `You have successfully bought ${type}!`;
        }
    }

    recipes({recipe}) {
        recipe = {
            recipeName: recipeName,
            productList: productList
        };

        let hasAllProducts = true;
        for(let product of productList) {
            if(!this.products.includes(product)) {
                hasAllProducts = false;
                throw new Error(`We do not have this product`);
            }
        }

        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if(!this.dishes.includes(dish)) {
            throw new Error(`We do not have this dish`);
        } else if(this.guests[guestName] === name) {
            throw new Error(`This guest has already been invited`);
        } else {

        }
    }

    showAttendance() {
        
    }
}