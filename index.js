// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatePage = require('./utils/generateMarkdown');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  //
//title prompt for user input
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  //description prompt for user input
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },

  //installation prompt
  {
    type: "input",
    name: "installation",
    message:
      "Provide a description of how to install the the project (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("You need to enter installation guidelines!");
        return false;
      }
    },
  },

  //usage prompt
  {
    type: "input",
    name: "usage",
    message: "Provide a description of how to use the project (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "You need to enter a project description of how to use the project!"
        );
        return false;
      }
    },
  },

  //contributing prompt
  {
    type: "input",
    name: "contribution",
    message:
      "Provide a description of the contributions to the project (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },

  //Test prompt
  {
    type: "input",
    name: "test",
    message: "Provide tests for the project (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },

  //license questions
  {
    type: "list",
    name: "license",
    message: "Which licenese will apply to this project? (Check ONLY one)",
    choices: ["Apache License 2.0", "GNU GPLv2", "GNU GPLv3", "MIT", "ISC"],



    
  },
  //github username prompt
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
// var mypromise = new Promise(function (resolve, reject){ })
// //mypromise.catch
// console.log(mypromise)

inquirer
// promise to give questions to user and collect data
  .prompt(questions)
  //once the data comes in from the user it is use to fill out the template and create the file
  .then((answers) => {
writeToFile("README.md", generateMarkdown(answers));
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
, 