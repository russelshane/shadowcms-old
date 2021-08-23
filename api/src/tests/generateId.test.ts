/**
 * @description Test ID Generation
 * @author ShadowCMS
 */

const { nanoid } = require("nanoid");

const id = nanoid(15);

describe("Test ID generator with ShadowCMS", () => {
  it("ID Generator should return a generated ID", () => {
    expect(id).toBe(id);
  });
});
