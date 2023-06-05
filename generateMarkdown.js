const licenses = [
  {
    name: "Apache",
    url: "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: "Boost",
    url: "[Boost](https://www.boost.org/LICENSE_1_0.txt)",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    name: "BSD 3-Clause License",
    url: "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    name: "Eclipse Public License 1.0",
    url: "[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  {
    name: "GNU GPL v3",
    url: "[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "ISC",
    url: "[ISC](https://opensource.org/licenses/ISC)",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  {
    name: "MIT",
    url: "[MIT](https://opensource.org/licenses/MIT)",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name: "Mozilla",
    url: "[Mozilla](https://opensource.org/licenses/MPL-2.0)",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  const licenseBadge = licenses.filter(
    (licenseObject) => licenseObject.name === license
  );
  return licenseBadge[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = licenses.filter(
    (licenseObject) => licenseObject.name === license
  );
  return licenseLink[0].url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  return `## License
  This project is licensed under ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
${data.license === "None" ? "" : " - [License](#license)"}

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

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
email: ${data.email}

${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
