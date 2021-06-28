const Manager = require("../libs/Manager");

test("This tests to see if office number is a number", () => {
  const manager = new Manager("Owen", 1, "something@mail.com", 1);

  expect(manager.office).toBe(1);
});

test('This tests to see that getRole returns Manager', () => {
  const manager = new Manager("Owen", 1, "something@mail.com", 1);

  expect(manager.getRole()).toBe("Manager")
})