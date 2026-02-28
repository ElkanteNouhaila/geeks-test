import fs from 'fs';

export function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("File Content:");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}