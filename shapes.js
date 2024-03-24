class Shape {
    constructor(colour, size) {
        this.colour = colour;
        this.size = size;
    }
}

class Circle extends Shape {

    // shape generation takes the desired shape size and divides by two to create a new variable 
    // called radius that is used to define the circle's x, y and r attributes
    //circle is encapsulated within < /> as it is a HTML element
    shapeGeneration() {
        const radius = this.size / 2;
        return `<circle cx=${radius} cy=${radius} r=${radius} fill=${this.colour} />`;
    }
}

class Square extends Shape {
    shapeGeneration() {
        return `<rect width=${this.size} height=${this.size} fill=${this.colour}/>`;
    }
}

class Triangle extends Shape {
    shapeGeneration() {
        const sideHeight  =this.size * Math.sqrt(3) / 2;
        return `<polygon points='0,${sideHeight} ${this.size / 2},0 ${this.size},${sideHeight}" fill='${this.color}" />`;
    }
}
