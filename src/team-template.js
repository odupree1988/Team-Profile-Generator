const employeeArr = require("../index");
const { writeFile } = require("../utils/generate-site");
var managerOutput = ``;
var engineerOutput = ``;
var internOutput = ``;

const card = () => {
  for (let i = 0; i < employeeArr.array.length; i++) {
    if (employeeArr.array[i].getRole() === "Manager") {
      managerOutput += managerCard(employeeArr.array[i]);
    }
    if (employeeArr.array[i].getRole() === "Engineer") {
      engineerOutput += engineerCard(employeeArr.array[i]);
    }
    if (employeeArr.array[i].getRole() === "Intern") {
      internOutput += internCard(employeeArr.array[i]);
    }
  }
};

const managerCard = (data) => {
  return `
${data.name}
${data.id}
${data.email}
${data.office}`;
};

const engineerCard = (data) => {
  return `
${data.name}
${data.id}
${data.email}
${data.github}`;
};

const internCard = (data) => {
  return `
${data.name}
${data.id}
${data.email}
${data.school}`;
};

const generatePage = () => {
  console.log(employeeArr.array[0].getName());
  card();
  return `
  ${managerOutput};
  ${engineerOutput}
  ${internOutput}
    `;
};

module.exports = (userData) => generatePage(userData);

//sort() by getRole()
//output += string
