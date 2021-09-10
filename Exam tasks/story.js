const { assert } = require("chai");

class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if(this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if(this._likes.length === 1) {
            let username = this._likes[0];
            return `${username} likes this story!`;
        } else {
            let username = this._likes[0];
            return `${username} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if(this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } 
        if(username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if(!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        let isFound = false;
        let indexOfComment = -1;
        for(let comment of this._comments) {
            indexOfComment++;
            if(id === comment.id) {
                isFound = true;
                break;
            }
        }
        
        if (id == undefined || !isFound) {

            if (id == undefined) {
                id = this._comments.length + 1;
            }

            this._comments.push({
                Id: id,
                Username: username,
                Content: content,               
                Replies: []
            });
            return `${username} commented on ${this.title}`;
        }

        if(isFound) {
            let comment = this._comments[indexOfComment];
            let replies = comment.Replies;
            replies.push({
                Id: id + '.' + (replies.length + 1),
                Username: username,
                Content: content
            });
            return `You replied successfully`;
        }       
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;

        if(sortingType === 'asc') {
            this._comments.sort((a, b) => a.Id - b.Id);
        } else if(sortingType === 'desc') {
            this._comments.sort((a, b) => b.Id - a.Id);
        } else if(sortingType === 'username') {
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
        }

        for(let comment of this._comments) {
            if(comment.Replies.length <= 1) {
                continue;
            }
            if(sortingType === 'asc') {
                comment.Replies.sort((a, b) => a.Id - b.Id);
            } else if(sortingType === 'desc') {
                comment.Replies.sort((a, b) => b.Id - a.Id);
            } else if(sortingType === 'username') {
                comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
            }
        }

        result += `Comments:`;
        for(let comment of this._comments) {
            result += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
            for(let reply of comment.Replies) {
                result += `\n--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
            }
        }

        return result;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
