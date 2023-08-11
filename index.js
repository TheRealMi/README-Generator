// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'Enter your project title:',
        name: 'title'
    },

    {
        type:'input',
        message:'Put a short description of your project here:',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Tell us how to install your project:',
        name: 'installation'
    },
    
    {
        type: 'input',
        message: 'Let us know how to use your project:',
        name: 'usage'
    },
    
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contribution'
    },
    
    {
        type: 'input',
        message: 'List any testing instructions here:',
        name: 'test'
    }, 

    {
        type: 'list',
        message: 'Please choose a license for your README:',
        name: 'license',
        choices: ['MIT License','Apache License 2.0','GNU General Public License v3.0','BSD 2-Clause License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','Mozilla Public License 2.0','The Unlicense']
    }, 
    
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUser',
    }, 
    
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
