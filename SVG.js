class LogoTxt {
    constructor(text, textColour) {
        this.text = text;
        this.textColour = textColour;
    }
    textGeneration() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`
    }
}

class SVG {
    constructor(shape, logotext) {
        this.shape = shape;
        this.logotext = logotext;
    }
    svgGeneration() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.shapeGeneration()}${this.logotext.textGeneration()}</svg>`;
    }
}