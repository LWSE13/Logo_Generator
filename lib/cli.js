const inquirer = require('inquirer');
const { writeFile }  = require('fs/promises');
const { Circle, Square, Triangle } = require('./shapes');
const { LogoTxt, SVG } = require('./SVG');
const questions = require('./questions');

class CLI {
    async run() {
        const answers = await inquirer.prompt(questions);

        const text = new LogoTxt(answers.text, answers.textColour);
        const shapeAnswer = answers.shape;
        let shape;
        switch (shapeAnswer) {
            case 'Circle':
                shape = new Circle(answers.colour);
                break;
            case 'Square':
                shape = new Square(answers.colour);
                break;
            case 'Triangle':
                shape = new Triangle(answers.colour);
                break;
        }
        const svg = new SVG(shape, text);
        const svgMarkup = svg.svgGeneration();

        await writeFile('logo-example.svg', svgMarkup);
        console.log('SVG file created');

    }
}

module.exports = CLI;