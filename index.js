const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./libs/Manager");
const teamHtml = require("./src/team-template");
const { writeFile } = require("./utils/generate-site");

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
          return false;
        },
      },
    ])
    .then(({ team }) => {
      if (team === "Manager") {
        promptManager();
      } else if (team === "Engineer") {
        return promptEngineer();
      } else if (team === "Intern") {
        return promptIntern();
      }
    });
};

const promptManager = (managerInput) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "Please enter the manager's name.(Required)",
        validate: (managerInput) => {
          if (managerInput) {
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
    .then(() => {
      return promptUser();
    });
};

const promptEngineer = (engineerInput) => {
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
    .then(() => {
      return promptUser();
    });
};

const promptIntern = (internInput) => {
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
    .then(() => {
      return promptUser();
    });
};

promptUser();

//This is the promise chain for passing data to the modules

// .then(managerInput)
//     .then((managerAnswers) => {
//       return teamHtml(managerAnswers);
//     })
//     .then((readMeMarkDown) => {
//       return writeFile(readMeMarkDown);
//     })
//     .then((writeFileResonse) => {
//       console.log(writeFileResonse.message);
//     })
