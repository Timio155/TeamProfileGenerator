const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Kobe Bryant", 1, "Black@Mamba.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});