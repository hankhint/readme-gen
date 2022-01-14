// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
//description prompt for user input
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  //installation prompt

  //usage prompt

  //contributing prompt

  //Tests prompt

  //license questions
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which licenese will apply to this project? (Check ONLY one)',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'GNU GPLv3', 'MIT','ISC', ]
  },

       {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      /* Pass your questions in here */ 
      type: "input",
      name: "why",
      message: "What is why?",
    },
    {

    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.why);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
