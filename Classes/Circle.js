class Circle {
    constructor(r) {
        this.getR = () => {
            return r;
        };

        this.setR = (value) => {
            r = value;
        };

        this.getDiameter = () => {
            return r * 2; 
        };

        this.setDiameter = (value) => {
            this.setR(value / 2);
        };
    }

    // get diameter() {
    //     return this.r * 2;
    // }

    // set diameter(value) {
    //     if(typeof value != 'number') {
    //         throw new TypeError('Parameter must be of type number');
    //     }
    //     this.r = value / 2;
    // }

    get area() {
        return this.getR ** 2 * Math.PI;
    }
}

const myCircle = new Circle(3);

console.log(myCircle.getR());

// let c = new Circle(2);
// console.log(`Radius: ${c.r}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.r}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);