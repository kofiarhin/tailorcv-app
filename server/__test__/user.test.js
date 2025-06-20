const request = require("supertest");
const dotenv = require("dotenv").config();
const app = require("../app");
const alpha = require("../ai/baseAi");
const cvAi = require("../ai/cvAi");

describe("passsing test", () => {
  it("should get list of users endpoint", async () => {
    const { body, statusCode } = await request(app).get("/api/users");
    expect(statusCode).toBe(200);
  });
});
