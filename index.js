// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

    const questions =[
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give short description explaning the what, why and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps requried to install your project',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'If you had any collabators or information list them here ',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Give your Licence here',
        name: 'license',
    },
    {
        type: 'input',
        message: 'If your project has features, list them here',
        name: 'features',
    },
    {
        type: 'input',
        message: 'If you created a appliction and would like other developers to contribute in it, enter the url',
        name: 'contribute',
    },
  ];

  function writeFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
          if (err)
          throw err;
          console.log("success!")
      });
  };
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
