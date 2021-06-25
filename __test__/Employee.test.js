const Employee = require("../src/Employee");

test("This test checks for values of employee", () => {
  const employee = new Employee("Owen", 1, "something@gmail.com");

  expect(typeof employee.name).toBe("string");
  expect(typeof employee.id).toBe("number");
  expect(typeof employee.email).toBe("string");
});

test("This tests to see if getName returns a string", () => {
  const employee = new Employee("Owen", 1, "something@gmail.com");

  expect(typeof employee.getName()).toBe("string");
  expect(employee.getName()).toBe("Owen");
});

test("This tests to see if getId returns a number", () => {
  const employee1 = new Employee("Owen", 1, "something@gmail.com");
  const employee2 = new Employee("Owen", "1", "something@gmail.com");

  expect(typeof employee1.getId()).toBe("number");
  expect(typeof employee2.getId()).toBe("number");
});

test("This tests to see if getEmail returns a string", () => {
  const employee = new Employee("Owen", 1, "something@gmail.com");

  expect(typeof employee.getEmail()).toBe("string");
  expect(employee.getEmail()).toBe("something@gmail.com");
});

test("This tests to see if getRole returns 'Employee'", () => {
  const employee = new Employee("Owen", 1, "something@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
