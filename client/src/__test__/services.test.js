import { describe, it, expect } from "vitest";
import { getUsers } from "../services/services";

describe("services", () => {
  it("passing test", async () => {
    const result = await getUsers();
    console.log(result);
  });
});
