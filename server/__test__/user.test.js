describe("passsing test", () => {
  const request = require("supertest");
  const app = require("../app");

  it("should get list of users endpoint", async () => {
    const { body, statusCode } = await request(app).get("/api/users");
    expect(statusCode).toBe(200);
  });
});
