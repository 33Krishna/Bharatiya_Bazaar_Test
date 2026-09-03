const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env.test"),
  override: true,
});

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "test-jwt-secret-key-for-testing-purposes-12345";
}
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "test";
}

jest.setTimeout(30000);
