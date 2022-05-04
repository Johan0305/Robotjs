const robot = require("./robot");

describe("Robot", () => {
  test("robot moving", () => {
    expect(robot(0, 1).moveup()).toStrictEqual([0, 2]);
  });
  test("robot moving2", () => {
    expect(robot(3, 5).moveup()).toStrictEqual([3, 6]);
  });
  test("robot moving3", () => {
    expect(robot(1, 7).moveup()).toStrictEqual([1, 8]);
  });
  test("robot moving4", () => {
    expect(robot(10, 10).moveup()).toStrictEqual([10, 5]);
  });
});
