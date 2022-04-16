// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project name.",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter a project name!");
                return false;
            } 
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // creating new promise for file creation
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), err => {
            if(err) {
                reject(err);
                return
            } else {
                resolve({
                    ok: true,
                    message: 'README Created!'
                })
            }
        })
    })
}

// TODO: Create a function to initialize app
init = () => {
    return inquirer
        .prompt(questions)
        .then(readMeData => {
            const { title } = readMeData
            return writeToFile(title, readMeData);
        })
        .then(markdownData => {
            console.log(markdownData);
        }) 
}

// Function call to initialize app
init();
