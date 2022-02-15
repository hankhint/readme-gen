// returns a license badge based on which license is passed in
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

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
The following necessary dependencies must be installed to run the application properly:

${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Send questions or comments to ${data.email} and find me on github https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
