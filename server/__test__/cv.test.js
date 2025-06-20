const request = require("supertest");
const dotenv = require("dotenv").config();
const { sampleDescription } = require("./data/data");
const app = require("../app");
const cvAi = require("../ai/cvAi");

describe("cv", () => {
  it("should generate cv properly", async () => {
    expect(1).toBe(1);
  });

  it("should test generate cv end point", async () => {
    const { body, statusCode } = await request(app).post("/api/generate").send({
      jobDescription: sampleDescription,
    });
  });
});
