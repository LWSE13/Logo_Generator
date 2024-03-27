const inquirer = require('inquirer');
const { writeFile }  = require('fs/promises');
const { Circle, Square, Triangle } = require('./shapes');
const { logoTxt, SVG } = require('./SVG');
const questions = require('./questions');

class CLI {
    async run() {
        const answers = await inquirer.prompt(questions);

        const text = new LogoTxt(answers.text, answers.textColour);
        const shapeAnswer = answers.shape.toLowerCase();
        let shape;
        switch (shapeAnswer) {
            case 'circle':
                shape = new Circle(answers.colour);
                break;
            case 'square':
                shape = new Square(answers.colour);
                break;
            case 'triangle':
                shape = new Triangle(answers.colour);
                break;
        }
        const svg = new SVG(shape, text);
        const svgMarkup = svg.svgGeneration();

        await writeFile('logo-example.svg', svgMarkup);
        console.log('SVG file created');

    }
}