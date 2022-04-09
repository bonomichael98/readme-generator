const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./page-template/template");

const promptUser = () => {
    return inquirer.prompt([
        //promptUser beginning
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?'
        }
    ])
};

const promptProject = portfolioData => {
    console.log(`promptProject beginning`)

    return inquirer.prompt([
        {
            //title of project
            type: "input",
            name: "name",
            message: "What is the name of your project?",
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please enter some information about your project.',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Create a table of contents.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Tell us how to install this project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Tell us how to use this project.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who worked on this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tell us about the tests for this project.',
        },
    ])
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        const pageHTML = generatePage();

        fs.writeFile('./README.md', , err => {
          if (err) throw new Error(err);

          console.log('Page created! Check out index.html in this directory to see it!');
        });
    });