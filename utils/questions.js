function questions(condition) {
  switch (condition) {
    // Add engineer case
    case "Add Engineer":
      return [
        {
          // Engineer's school
          type: "input",
          message: "Please enter your employee github",
          name: "github",
        },
        {
          // Engineer's name
          type: "input",
          message: "Please enter your employee name",
          name: "name",
        },
        {
          // Engineer's name
          type: "input",
          message: "Please enter your employee id",
          name: "id",
        },
        {
          // Engineer's name
          type: "input",
          message: "Please enter your employee email",
          name: "email",
        },
      ];
    // Add Intern case           ]
    case "Add Intern":
      return [
        {
          // Intern's school
          type: "input",
          message: "Please enter your employee school",
          name: "school",
        },
        {
          // Intern's name
          type: "input",
          message: "Please enter your employee name",
          name: "name",
        },
        {
          // Intern's employee_id
          type: "input",
          message: "Please enter your employee id",
          name: "id",
        },
        {
          // Intern's employee email
          type: "input",
          message: "Please enter your employee email",
          name: "email",
        },
      ];
    // Main Menu        ]
    case "View Menu":
      return [
        {
          type: "list",
          message: "Please choose your next action",
          choices: ["Add Engineer", "Add Intern", "Write to File"],
          name: "action",
        },
      ];
    // Default case
    default:
      return [
        {
          // Manager github
          type: "input",
          message: "Please enter your manager office number",
          name: "github",
        },
        {
          // Employee name
          type: "input",
          message: "Please enter your employee name",
          name: "name",
        },
        {
          // Employee id
          type: "input",
          message: "Please enter your employee id",
          name: "id",
        },
      ];
  }
}

module.exports = questions;
