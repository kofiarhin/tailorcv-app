const { writeFile, mkdir } = require("fs/promises");
const path = require("path");

// Arrow function to save the CV in server/data
const saveCVToFile = async (cvContent, fileName = "generated-cv.txt") => {
  const dirPath = path.join(__dirname, "..", "..", "server", "data");
  const filePath = path.join(dirPath, fileName);

  try {
    await mkdir(dirPath, { recursive: true });
    await writeFile(filePath, cvContent);
    console.log(`CV saved to ${filePath}`);
  } catch (err) {
    console.error("Failed to save CV:", err);
  }
};

module.exports = { saveCVToFile };
