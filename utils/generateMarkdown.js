// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseSection(license) {
  
  //render license markdown

  //if no license is selected then return an empty string
  if (!license) {
    return '';
  }
  else {
    return `
    ## License
    The application uses the ${license} license.
    ![Badge](https://img.shields.io/badge/License-${license}-blue.svg)
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## ${data.description}

  # Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
The following necessary dependencies must be installed to run the application properly:

  ## ${data.installation}

  ## ${data.usage}

  ${ renderLicenseSection(data.license) }

  ## ${data.contribution}

  ## ${data.test}

  ## Questions
   Send questions or comments to ${github}
`;
}

module.exports = generateMarkdown;
