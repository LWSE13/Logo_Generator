const inquirer = require('inquirer');
const { writefile }  = require('fs/promises');
const { join } = require('path');
const { createDocument } = require('./document');

class CLI {
    constructor() {
        this.title = '';
        this.tasks = [];

    }
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
        ])
        .then(({ name }) => {
            this.title = `${name}'s Tasks`;
            
        })
    }
}