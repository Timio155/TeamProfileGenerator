const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Tim", 1, "test@test.com", "NDSU");
    expect(e.getRole()).toBe(testValue);
});