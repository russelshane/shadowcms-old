/**
 * @description Test dayjs formatting
 * @author ShadowCMS
 */

const dayjs = require("dayjs");

describe("Default ShadowCMS Day.js Formatting", () => {
  it("Shadow CMS date format with Day.js", () => {
    expect(dayjs().format("YYYY-MM-DDTHH:mm:ss")).toBe(
      dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    );
  });
});
