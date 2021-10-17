(function() {
    String.prototype.ensureStart = function(str) {
        if(this.startsWith(str)) {
            return this.toString();
        }
        return `${str}${this}`;
    };

    String.prototype.ensureEnd = function(str) {
        if(this.endsWith(str)) {
            return this.toString();
        }
        return `${this}${str}`;
    };

    String.prototype.isEmpty = function() {
        return this.toString() === '';
    };

    String.prototype.truncate = function(n) {
        if(this.length <= n) {
            return this.toString();
        }

        if(this.includes(' ')) {
            let words = this.split(' ');
        do {
            words.pop();
        } while(words.join('').length + 3 > n)
        let sentence = `${words.join(' ')}...`;
        return sentence;
        }

        if(n > 3) {
            let string = `${this.slice(0, n - 3)}...${'.'.repeat(n)}`;
            return string;
        }

        return '.'.repeat(n);
    };

    String.format = function(string, ...params) {
        let replaceRegex = /{(\d+)}/g;
        let replacedString = string.replace(replaceRegex, (match, group1) => {
            let index = Number(group1);
            if(params[index] !== undefined) {
                return params[index];
            }
        });
        return replacedString;
    };
}());

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
'quick', 'brown');
str = String.format('jumps {0} {1}',
'dog');

// let a = 'abc';
// console.log(a.ensureStart('ab'));
// console.log(a.ensureEnd('bc'));
// console.log(a.isEmpty());
// console.log(''.isEmpty());