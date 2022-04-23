const inquirer = require("inquirer");
const fs = require("fs");

const promptProject = portfolioData => {
    return inquirer.prompt([
        //beginning of inputs
        {
            type: 'input',
            name: 'yourName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?'
        },
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?",
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please enter some information about your project.',
        },
        {
            type: 'input',
            name: 'tableOfContents',
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
        }
        //end of inputs
    ]
    ).then(( {
        title, yourName, github, about, tableOfContents, installation, usage, contributing, tests
    
    }) =>{ readmeSkeleton(title, yourName, github,about,tableOfContents,installation,usage,contributing,tests)
    console.log({title, yourName, github, about, tableOfContents, installation, usage, contributing, tests})})
};

const readmeSkeleton = (title, yourName, github,about,tableOfContents,installation,usage,contributing,tests) => {
    let data = `
    ## 01 ${title}
    ## 02 Author
    ${yourName}
    ## 03 Github
    ${github}
    ## 004 Description
    ${about}
    ## 05 Categories
    ${tableOfContents}
    ## 06 How to install
    ${installation}
    ## 07 ${usage}
    ## 08 Contributors
    ${contributing}
    ## 09 Testing
    ${tests}
    `
    create(data)
    function create(data) {
        fs.writeFile(`./readme.md`, data, () => {
            console.log('success');
        });
    };
};
// promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//         const pageHTML = generatePage();

//         fs.writeFile('./README.md', , err => {
//           if (err) throw new Error(err);

//           console.log('Page created! Check out index.html in this directory to see it!');
//         });
//     });



promptProject();