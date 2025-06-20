const CVAI = require("../ai/cvAi");
const { saveCVToFile } = require("../utility/helper");
const fs = require("fs/promises");
const path = require("path");

const createCv = async (req, res) => {
  const { jobDescription } = req.body;

  const filePath = path.join(__dirname, "..", "data", "cv.txt");
  const context = await fs.readFile(filePath, "utf-8");
  const result = await CVAI({ context, jobDescription });
  await saveCVToFile(result);
  return res.json({ message: result });
};

module.exports = {
  createCv,
};
