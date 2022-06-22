const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Michael Jordan", 1, "Michael@Jordan.com", "NDSU");
    expect(e.getRole()).toBe(testValue);
});