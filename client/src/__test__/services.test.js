import { describe, it, expect } from "vitest";
import { getUsers } from "../services/services";
import { createCv } from "../utility/helper";

describe("services", () => {
  const sampleJobDescription = `
Job Title: System Administrator
Location: [Insert Location or Remote]
Type: Full-Time

Job Overview:
We’re looking for a reliable System Administrator to manage and support our internal IT infrastructure. Responsibilities include server maintenance, user account management, system updates, and ensuring network security and uptime.

Key Requirements:
- Strong knowledge of Windows/Linux server environments
- Experience with network protocols, firewalls, and backups
- Familiar with cloud services (AWS, Azure) and virtualization (VMware, Hyper-V)
- Proficient in scripting (Bash, PowerShell)
- Solid problem-solving and communication skills
`;

  it("passing test", async () => {
    const result = await getUsers();
    console.log(result);
  });

  it("should create cv properly", async () => {
    const result = await createCv(sampleJobDescription);

    console.log(result);
  });
});
