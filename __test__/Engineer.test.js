const Engineer = require("../src/Engineer");

test("This tests to see if github returns a string", () => {
  const engineer = new Engineer("Owen", 1, "something@mail.com", "github");

  expect(engineer.github).toBe("github");
});

test("This tests to see that getRole returns Engineer", () => {
  const engineer = new Engineer("Owen", 1, "something@mail.com", "github");

  expect(engineer.getRole()).toBe("Engineer")
})
