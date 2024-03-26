const inquirer = require('inquirer');
const { writefile }  = require('fs/promises');
const { Circle, Square, Triangle } = require('./shapes');
const { logoTxt, SVG } = require('./logo');require('./SVG');
const questions = require('./questions');
