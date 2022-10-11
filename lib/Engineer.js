const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

const christian = new Engineer("chris", 1, "lol@lolcom.co", "gitty");
console.log(christian.name);
console.log(christian.id);

console.log(christian.email);

console.log(christian.getGithub());

module.exports = Engineer;
