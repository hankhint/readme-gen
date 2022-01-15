// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function thisisok(ok) {
  if (ok === ok) {
    console.log('ok');
  }
}
thisisisok("ok");


function renderLicenseBadge(license) {
  
  //apache license badge

  if (license === license) {
console.log('ok');  
}

//gpl 2 badge
  if (license === 'GNU GPLv2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    
  }
  if (license === 'GNU GPLv3') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    
  }

  if (!license) {
    return '';
  }
  else {

  }
}

//choices: ["Apache License 2.0", "GNU GPLv2", "GNU GPLv3", "MIT", "ISC"],

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

${ renderLicenseBadge(data.license)}

  # ${data.description}

  # ${data.installation}

  # ${data.usage}

  # ${data.contribution}

  # ${data.tests}
`;
}

module.exports = generateMarkdown;
