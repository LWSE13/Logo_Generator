const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to the logo?',
        validate: (text) => {
            if (text.length <= 3) {
                return true;
            }
            return 'Please enter up to 3 characters';
        }
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'What colour would you like the text to be?',
    },
    {
        type : 'list',
        name: 'shape',
        message: 'Which shape would you like to add?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'colour',
        message: 'What colour would you like the shape to be?',
    }
]

module.exports = questions;