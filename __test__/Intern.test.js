const Intern = require("../libs/Intern");

test("This tests to see if school is a string", () => {
  const intern = new Intern("Owen", 1, "something@mail.com", "UCF");

  expect(intern.school).toBe("UCF");
});

test("This tests to see that getSchool returns the school name", () => {
  const intern = new Intern("Owen", 1, "something@mail.com", "UCF");

  expect(intern.getSchool()).toBe("UCF");
});

test("This tests to see that getRole returns Intern", () => {
  const intern = new Intern("Owen", 1, "something@mail.com", "UCF");

  expect(intern.getRole()).toBe("Intern");
});
