const Employee = require("../src/Employee");

test("This test checks for values of employee", () => {
  const employee = new Employee("Owen", 1, "something@mail.com");

  expect(employee.name).toBe("Owen");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("something@mail.com");
});

test("This tests to see if getName returns a string", () => {
  const employee = new Employee("Owen", 1, "something@mail.com");

  expect(employee.getName()).toBe("Owen");
});

test("This tests to see if getId returns a number", () => {
  const employee = new Employee("Owen", 1, "something@mail.com");

  expect(employee.getId()).toBe(1);
});

test("This tests to see if getEmail returns a string", () => {
  const employee = new Employee("Owen", 1, "something@mail.com");

  expect(employee.getEmail()).toBe("something@mail.com");
});

test("This tests to see if getRole returns 'Employee'", () => {
  const employee = new Employee("Owen", 1, "something@mail.com");

  expect(employee.getRole()).toBe("Employee");
});
