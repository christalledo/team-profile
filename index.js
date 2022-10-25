
// Import all necessary files

const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const questions = require("./utils/questions.js");

const generateTeamPage = require("./utils/template")
const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];

// inquirer prompt function 

async function promptMenu() {
  let questionBase = await questions("View Menu");
  const data = await inquirer.prompt(questionBase);
  console.log(data);
  switch (data.action) {
    case "Add Engineer":
      let questionBase = await questions("Add Engineer");
      let engineerData = await inquirer.prompt(questionBase);
      console.log(engineerData);
      const newEngineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      console.log(newEngineer);
      employees.push(newEngineer);
      promptMenu();
      break;

    case "Add Intern":
      let internQuestions = await questions("Add Intern");
      let internData = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      console.log(newIntern);
      employees.push(newIntern);
      promptMenu();
      break;





    default:
      console.log(employees);
      await fs.writeFile("./index.html", generateTeamPage(employees), (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
      break;
  }
}

// function to initialize app
async function init() {
  let questionBase = await questions("default");
  const data = await inquirer.prompt(questionBase);
  const newManager = new Manager(data.name, data.id, data.email);
  employees.push(newManager);
  promptMenu();
}

// Function call to initialize app
init();
