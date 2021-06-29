const fs = require("fs");
const inquirer = require("inquirer");
const teamHtml = require("./src/team-template");
const { writeFile } = require("./utils/generate-site");
const Manager = require("./libs/Manager");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");

exports.array = employeeArr = [];

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add a new employee?",
        default: true,
      },
      {
        type: "list",
        name: "team",
        message:
          "Please select which type of employee you would like to add. (Required)",
        choices: ["Manager", "Engineer", "Intern"],
        when: ({ addMember }) => {
          if (addMember) {
            return true;
          }
          const html = teamHtml();
          writeFile(html);
          return false;
        },
      },
    ])
    .then(({ team }) => {
      if (team === "Manager") {
        return promptManager(team);
      } else if (team === "Engineer") {
        return promptEngineer();
      } else if (team === "Intern") {
        return promptIntern();
      }
    });
};

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the manager's name.(Required)",
        // when: ({ addManager })
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
          return "Please enter a name!";
        },
      },
      {
        // REFACTOR come back to this and try to refactor to reset empty Input
        type: "input",
        name: "managerId",
        message: "Please enter the manager's employee ID. (Required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            return "Must be a number!";
          } else if (!idInput) {
            return "Please enter the manager's employee ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter a email address. (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          }
          return "Please enter the manager's email address!";
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Please enter the office number",
        validate: (officeInput) => {
          if (isNaN(officeInput)) {
            return "Must be a number";
          } else if (!officeInput) {
            return "Please enter the office number!";
          }
          return true;
        },
      },
    ])
    .then((managerData) => {
      let manager = new Manager(
        managerData.managerName,
        managerData.managerId,
        managerData.managerEmail,
        managerData.managerOffice
      );
      console.log(manager);
      employeeArr.push(manager);
      console.log(employeeArr);
      return promptUser();
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
          return "Please enter a name!";
        },
      },
      {
        // REFACTOR come back to this and try to refactor to reset empty Input
        type: "input",
        name: "engineerId",
        message: "Please enter the engineer's employee ID. (Required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            return "Must be a number!";
          } else if (!idInput) {
            return "Plese enter the engineer's employee ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter a email address. (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          }
          return "Please enter the engineer's email address!";
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the engineer's GitHub username. (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          }
          return "Please enter a GitHub username!";
        },
      },
    ])
    .then((engineerData) => {
      let engineer = new Engineer(
        engineerData.engineerName,
        engineerData.engineerId,
        engineerData.engineerEmail,
        engineerData.engineerGithub
      );
      employeeArr.push(engineer);
      console.log(employeeArr);
      return promptUser();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
          return "Please enter a name!";
        },
      },
      {
        // REFACTOR come back to this and try to refactor to reset empty Input
        type: "input",
        name: "internId",
        message: "Please enter the intern's employee ID. (Required)",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            return "Must be a number!";
          } else if (!idInput) {
            return "Please enter the intern's employee ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter an email address. (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          }
          return "Please enter the intern's email address!";
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter the intern's school name. (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          }
          return "Please enter a school name!";
        },
      },
    ])
    .then((internData) => {
      let intern = new Intern(
        internData.internName,
        internData.internId,
        internData.internEmail,
        internData.internSchool
      );
      employeeArr.push(intern);
      console.log(employeeArr);
      return promptUser();
    });
};

promptUser();
