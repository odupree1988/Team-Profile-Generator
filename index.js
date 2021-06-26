const fs = require("fs");
const inquirer = require("inquirer");
const teamHtml = require("./utils/team-template");
// const { writeFile } = require('./utils/generate-site')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "Please enter a manager name.(Required)",
      validate: (managerValue) => {
        if (managerValue) {
          return true;
        } else {
          console.log("Please enter a manager Name!");
          return false;
        }
      },
    },
    {
      // REFACTOR come back to this and try to refactor to reset empty value
      type: "input",
      name: "id",
      message: "Please enter the manager's employee ID. (Required)",
      validate: (idValue) => {
        if (isNaN(idValue)) {
          return "Must be a number!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter an email address. (Required)",
      validate: (emailValue) => {
        if (emailValue) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "Please enter the office number",
      validate: (officeValue) => {
        if (isNaN(officeValue)) {
          return "Must be a number";
        } else {
          return true;
        }
      },
    },
  ]);
};

promptUser();
