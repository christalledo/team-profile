class Employee {
  constructor(name, id, email) {
    (this.name = name), (this.id = id);
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

const talledo = new Employee("Christian", 5);

console.log(talledo);

module.exports = Employee;
