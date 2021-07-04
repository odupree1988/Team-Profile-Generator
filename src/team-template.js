const employeeArr = require("../index");
let managerOutput = ``;
let engineerOutput = ``;
let internOutput = ``;

const employeeCard = () => {
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
  <div class="col d-flex justify-content-center">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
      <div class="card-header fw-bold bg-primary text-light">
        ${data.name}
        <p class="fw-normal text"><i class="fas fa-mug-hot"></i> Manager </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">Offcie Number: ${data.office}</li>
      </ul>
    </div>
  </div>
`;
};

const engineerCard = (data) => {
  return `
  <div class="col d-flex justify-content-center">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
      <div class="card-header fw-bold bg-primary text-light">
        ${data.name}
        <p class="fw-normal text"><i class="fas fa-glasses"></i> Engineer </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
      </ul>
    </div>
  </div>
`;
};

const internCard = (data) => {
  return `
  <div class="col d-flex justify-content-center">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
      <div class="card-header fw-bold bg-primary text-light">
        ${data.name}
        <p class="fw-normal text"><i class="fas fa-user-graduate"></i> Intern </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">School: ${data.school}</li>
      </ul>
    </div>
  </div>
`;
};

const generatePage = () => {
  employeeCard();
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team-Page</title>
    </head>
    <body>
      <div class="container">
        <div class="row"> 
          <div class="col-xs-12 bg-danger rounded mb-5" style="height: 100px">
            <div class="text-center text-light fw-bold fs-1">My Team</div>
          </div> 
          ${managerOutput}
          ${engineerOutput}
          ${internOutput}
        </div>
      </div>
      <script src="https://kit.fontawesome.com/999fbc12dd.js" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </body>
  </html>
    `;
};

module.exports = (userData) => generatePage(userData);
