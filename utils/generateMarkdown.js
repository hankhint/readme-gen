// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseSection(license) {
  
  //render license markdown

  //if no license is selected then return an empty string
  if (!license) {
    return '';
  }
  else {
    //if a licenese is selected then render the markdown with the license name and the license badge icon
    //TODO render license link
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

${ renderLicenseSection(data.license)}

  # ${data.description}

  # ${data.installation}

  # ${data.usage}

  # ${data.contribution}

  # ${data.tests}
`;
}

module.exports = generateMarkdown;
