const fs = require("fs");
const path = require("path");

const srcRoot = path.join(__dirname, "..", "src");
const distRoot = path.join(__dirname, "..", "dist");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.name.endsWith(".sass") || entry.name.endsWith(".css")) {
      files.push(full);
    }
  }
  return files;
}

for (const file of walk(srcRoot)) {
  const rel = path.relative(srcRoot, file);
  const dest = path.join(distRoot, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(file, dest);
}

console.log("Copied styles into dist/");
