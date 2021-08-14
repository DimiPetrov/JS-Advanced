const { times } = require("lodash");

class ArtGallery {
    constructor() {
        this.creator = creator;
        this.possibleArticles = {};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        let isArticleModelExist = true;
        if(this.possibleArticles[articleModel] === undefined) {
            isArticleModelExist = false;
            console.log(`This article model is not included in this gallery!`);
        } else {
            if(this.listOfArticles[articleName] !== undefined) {
                this.possibleArticles[articleModel] += quantity;
            } else {
                this.listOfArticles[articleModel.toLowerCase()] = {
                    'articleName': articleName,
                    'quantity': quantity
                };
            }
            console.log(`Successfully added article ${articleName} with a new quantity- ${quantity}.`);
        }
    }

    inviteGuest(guestName, personality) {
        let isGuestExist = false;
        if(this.guests[guestName] === undefined) {
            isGuestExist = true;
            console.log(`${guestName} has already been invited.`);
        } else {
            if(personality === 'Vip') {
                this.guests[guestName] = {
                    'points': 500,
                    'purchaseArticle': 0
                };
            } else if(personality === 'Middle') {
                this.guests[guestName] = {
                    'points': 250,
                    'purchaseArticle': 0
                };
            } else {
                this.guests[guestName] = {
                    'points': 50,
                    'purchaseArticle': 0
                };
            }
            console.log(`You have successfully invited ${guestName}!`); 
            isGuestExist = true;          
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = {
            'articleName': articleName,
            'articlePoint': articlePoint,
            'quantity': quantity
        }
        if(this.listOfArticles[articleName] === undefined || 
            this.possibleArticles[articleModel] !== this.listOfArticles[articleModel]) {
                console.log(`This article is not found.`);
        } else if(articleModel[quantity] === 0) {
            console.log(`The ${articleName} is not available.`);
        } else if(this.guests[guestName] === undefined) {
            console.log(`This guest is not invited.`);
        } else {
            if(guestName[points] < articleModel[articlePoint]) {
                console.log(`You need to more points to purchase the article.`);
            } else {
                guestName[points] -= articleModel[articlePoint];
                this.listOfArticles[quantity]--;
                guestName[purchaseArticle]++;
            }
            console.log(`${guestName} successfully purchased the article worth ${articlePoint} points.`);
        }
    }

    showGalleryInfo(criteria) {
        if(criteria === 'article') {
            console.log(`Articles information:\n${this.listOfArticles[articleModel]} - ${this.listOfArticles[articleName]} - ${this.listOfArticles[quantity]}`);
        } else if(criteria === 'guest') {
            console.log(`Guests information:\n${this.guests[guestName]} - ${this.guests[purchaseArticle]}`);
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
