//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
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

  //TOC is here in markdown file

  //installation prompt
  {
    type: "input",
    name: "installation",
    message:
      "Provide a description of how to install the the project including dependencies(Required)",
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

  //license questions
  {
    type: "list",
    name: "license",
    message: "Which licenese will apply to this project?",
    choices: [
      "MIT",
      "GNU-AGPLv3",
      "GNU-LGPLv3",
      "GNU-GPLv3",
      "Mozilla-Public-License-2.0",
      "Apache-License-2.0",
    ],
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
  //email prompt
  {
    type: "input",
    name: "email",
    message: "Enter your email (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
];

//function for writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

inquirer
  // promise to give questions to user and collect data
  .prompt(questions)
  //once the data comes in from the user it is use to fill out the template and create the file

  .then(function (data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFile("dist/README.md", readmeContent, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Readme Successfully Created!");
      }
    });
  });
