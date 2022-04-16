// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }

  // switch case to return license badge as specified in user input
  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "gpl-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { title, description, installation, usage, license } = data;

  return `# ${title}
    ## Description
    ${description}
    ${renderLicenseBadge(license)}
    ## Table of Contents
    1. [ Installation ](#installation)
    2. [ Usage ](#usage)
    3. [ License ](#license)
    4. [ Contributing ](#contributing)
    5. [ Tests ](#tests)
    6. [ Questions ](#questions)

    <a name="installation"></a>
    ## Installation
    ${installation}

    <a name="usage"></a>
    ## Usage
    ${usage}

    <a name="license"></a>
    ## License

    <a name="contributing"></a>
    ## Contributing

    <a name="tests"></a>
    ## Tests

    <a name="questions"></a>
    ## Questions


  `;
}

module.exports = generateMarkdown;
