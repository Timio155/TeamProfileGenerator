const Manager = require("../lib/Manager");

test("Can put office number with constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Lebron James", 1, "Lebron@James.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});