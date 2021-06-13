var assert = require("chai").assert;
BuddhistEntity = require("../src/buddhistentity");
require("jsdom-global")();
require("isomorphic-fetch");
// require("../src/index.js");
describe("BuddhistEntity", function () {
  const testEntity = new BuddhistEntity(
    "1",
    "Buddha",
    "Buddhism",
    "https://example.com/buddha.jpg"
  );
  const BACKEND_URL = "https://young-forest-03120.herokuapp.com";
  const MONASTERIES_URL = `${BACKEND_URL}/api/v1/monasteries`;
  describe("#constructor()", function () {
    it("returns an instance of class BuddhistEntity", function () {
      assert.typeOf(testEntity, "Object");
      assert.instanceOf(testEntity, BuddhistEntity);
    });
    it("has property id", function () {
      assert.property(testEntity, "id");
    });
    it("has property name", function () {
      assert.property(testEntity, "name");
    });
    it("has property religious_tradition", function () {
      assert.property(testEntity, "religious_tradition");
    });
    it("has property image_url", function () {
      assert.property(testEntity, "image_url");
    });
  });
  describe("#fetchEntries()", function () {
    it("returns a promise", function () {
      const entries = BuddhistEntity.fetchEntries(MONASTERIES_URL);
      assert.typeOf(entries, "Promise");
    });
  });
});
