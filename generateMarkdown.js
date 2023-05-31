// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //string "this project is form X licesnse"
  //(https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  // function licenseChoice(value) {
  // if (value === "MIT") {
  //   return "MIT";
  // } else if (value === "Apache") {
  //   return "Apache";
  //} else if (value === "GPL") {
  ///   return "GPL";
  //} else if (value === "BSD") {
  // return "BSD";
  //} else {
  //  return "None";
  // }
  //}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //https://opensource.org/licenses/Apache-2.0)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  return `## License
  this project is licsensed under ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## instalation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}


${renderLicenseSection(data.license)}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
email: ${data.email}

`;
}

module.exports = generateMarkdown;
