// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const createReadMe = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },

  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: [
      "Apache",
      "Boost",
      "BSD 3-Clause License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "ISC",
      "MIT",
      "Mozilla",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, createReadMe(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README_New.md", data);
  });
}

// Function call to initialize app
init();
