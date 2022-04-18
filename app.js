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
    ).then( {
        title, yourName, github, about, tableOfContents, installation, usage, contributing, tests
    });
};

const readmeSkeleton = (title, yourName, github,about,tableOfContents,installation,usage,contributing,tests) => {
    return`
    ##001 ${title}
    ##002 ${yourName}
    ##003 ${github}
    ##004 ${about}
    ##005 ${tableOfContents}
    ##006 ${installation}
    ##007 ${usage}
    ##008 ${contributing}
    ##009 ${tests}
    `
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

// function createNewFile(readmeSkeleton) {
//     fs.writeFile(`./${fileName}.md`, data, () => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('success');
//         };
//     });
// };

promptProject();