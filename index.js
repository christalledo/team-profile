const Engineer = require("./lib/Engineer.js");

const questions = import("./utils/questions.cjs");
console.log(questions);
const inquirer = import("inquirer");
const fs = import("fs");
const employees = [];
// i'm thinking about async and await to integrate them in one js like first for employee and then engineer and so on an so forth, and also put some conditional statements.

//  function to write README file
// function writeToFile(generateMarkdown, response) {
//     fs.writeToFile('index.html', "Here is our function working", (err) => err ? console.log(err, response) : console.log("Success"))
// }
async function promptMenu() {
  let questionBase = await questions("View Menu");
  data = await inquirer(questionBase);
  switch (data.action) {
    case "Add Engineer":
        let questionBase = await questions("Add Engineer")
        let engineerData = await inquirer(questionBase)
        const newEngineer = new Engineer()
        employees.push(newEngineer)
        promptMenu()
        break;
  
    default:
        (await fs).writeFile('./index.html', generateTeamPage(employees), callback function)
        break;
  }
}

// function to initialize app
async function init() {
  let questionBase = await questions("default");
  data = await inquirer(questionBase);
  console.log(data);
  const newManager = new Manager(data.name, data.id, data.email);
  employees.push(newManager);
  promptMenu();
}

// Function call to initialize app
init();
