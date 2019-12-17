///Vector class

export class vector {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    modulus() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}