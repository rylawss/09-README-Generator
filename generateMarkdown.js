const licenses = [
  {
    name: "Apache",
    url: "https://opensource.org/licenses/Apache-2.0",
    badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  },
  {
    name: "Boost",
    url: "https://www.boost.org/LICENSE_1_0.txt",
    badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
  },
  {
    name: "BSD 3-Clause License",
    url: "https://opensource.org/licenses/BSD-3-Clause",
    badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
  },
  {
    name: "Eclipse Public License 1.0",
    url: "https://opensource.org/licenses/EPL-1.0",
    badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
  },
  {
    name: "GNU GPL v3",
    url: "https://www.gnu.org/licenses/gpl-3.0",
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
  },
  {
    name: "ISC",
    url: "https://opensource.org/licenses/ISC",
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
  },
  {
    name: "MIT",
    url: "https://opensource.org/licenses/MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
  },
  {
    name: "Mozilla",
    url: "https://opensource.org/licenses/MPL-2.0",
    badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadge = licenses.filter((license) => license.name === license);
  return licenseBadge[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = licenses.filter((license) => license.name === license);
  return licenseLink[0].url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  return `## License
  this project is licensed under ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[Test](#test)
[License](#license)
[Questions](#questions)

## Description
${data.description}

## Installation
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
