const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Can recognize as Employee", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Leroy Jenkins";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
});