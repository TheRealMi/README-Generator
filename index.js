// TODO: Include packages needed for this application
const generateMarkdown = require("./utils.generateMarkdown.js")
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
        type:'editor',
        message:'Put a short description of your project here:',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'Tell us how to install your project:',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'Let us know how to use your project:',
        name: 'usage'
    },
    {
        type: 'editor',
        message: 'How can others contribute to your project?',
        name: 'contribution'
    },
    {
        type: 'editor',
        message: 'List any testing instructions here:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose a license for your README:',
        name: 'license',
        choices: ['No License','MIT License','Apache License 2.0','GNU General Public License v3.0','BSD 2-Clause License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','Mozilla Public License 2.0','The Unlicense']
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), err=>{
        if(err) throw err;
        console.log("success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
            then(data=>{writeToFile("./output/README.md", data)})
}

// Function call to initialize app
init();
