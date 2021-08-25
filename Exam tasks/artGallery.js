const {
    times
} = require("lodash");

class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (this.possibleArticles[articleModel] === undefined) {
            console.log(`This article model is not included in this gallery!`);
        } else {
            let isFound = false;
            for (let article of this.listOfArticles) {
                if (article.articleName === articleName) {
                    if (article.articleModel === articleModel) {
                        isFound = true;
                        article.quantity += quantity;
                        break;
                    }
                }
            }

            if (!isFound) {
                this.listOfArticles.push({
                    'articleModel': articleModel,
                    'articleName': articleName,
                    'quantity': quantity
                });
            }

            console.log(`Successfully added article ${articleName} with a new quantity- ${quantity}.`);
        }
    }

    inviteGuest(guestName, personality) {
        let doesGuestExist = false;
        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                doesGuestExist = true;
                console.log(`${guestName} has already been invited.`);
                break;
            }
        }

        if (!doesGuestExist) {
            if (personality === 'Vip') {
                this.guests.push({
                    'guestName': guestName,
                    'points': 500,
                    'purchaseArticle': 0
                });
            } else if (personality === 'Middle') {
                this.guests.push({
                    'guestName': guestName,
                    'points': 250,
                    'purchaseArticle': 0
                });
            } else {
                this.guests.push({
                    'guestName': guestName,
                    'points': 50,
                    'purchaseArticle': 0
                });
            }
            console.log(`You have successfully invited ${guestName}!`);
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        let isFound = false;
        let articleToBeBought = {};
        for (let article of this.listOfArticles) {
            if (article.articleName === articleName) {
                if (article.articleModel === articleModel) {
                    isFound = true;
                    articleToBeBought = article;
                    break;
                }
            }
        }

        if (!isFound) {
            console.log(`This article is not found.`);
            return;
        } else if (articleToBeBought.quantity === 0) {
            console.log(`The ${articleName} is not available.`);
            return;
        }

        let doesGuestExist = false;
        let buyer = {};
        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                doesGuestExist = true;
                buyer = guest;
                break;
            }
        }

        if (!doesGuestExist) {
            console.log(`This guest is not invited.`);
            return;
        }

        if (buyer.points < this.possibleArticles[articleModel]) {
            console.log(`You need to more points to purchase the article.`);
            return;
        }

        let articlePoints = this.possibleArticles[articleModel];
        buyer.points -= articlePoints;
        buyer.purchaseArticle++;
        articleToBeBought.quantity--;
 
        console.log(`${guestName} successfully purchased the article worth ${articlePoints} points.`);
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            console.log(`Articles information:\n`);
            for(let article of this.listOfArticles) {
                console.log(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
            
        } else if (criteria === 'guest') {
            console.log(`Guests information:\n`);
            for(let guest of this.guests) {
                console.log(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
        }    
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
