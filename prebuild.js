// prebuild.js
import fs from "node:fs";
import path from "node:path";

const staticDir = path.join("dist", "static");

if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
  console.log("✅ Created dist/static directory");
} else {
  console.log("ℹ️ dist/static already exists");
}
