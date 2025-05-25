import fs from "fs";
import path from "path";

const filePath = path.resolve("dist", "static", "narcissism-complete-guide.zip");

if (fs.existsSync(filePath)) {
  console.log("✅ ZIP file verified in dist/static");
} else {
  console.error("❌ ZIP file NOT FOUND in dist/static during build");
  process.exit(1); // fail the build if missing
}
