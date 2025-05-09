import express, { type Request, Response, NextFunction, type Express } from "express";
import cors from "cors";
import { createServer } from "http";
import path from "path";
import { setupVite } from "./vite.js";
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./vite.js";


// Optional log function
function log(message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

// Optional route registration
const app = express();
const httpServer = createServer(app);

// ✅ Middleware setup
app.use(
  cors({
    origin: "https://the15minutescoach.com",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJsonResponse = body;
    return originalJson.call(this, body, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

// ✅ Main async init
(async () => {
  registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, httpServer);
  } else {
    serveStatic(app); // Make sure this is implemented in vite.ts
  }

  const port = 5000;
  httpServer.listen(port, "0.0.0.0", () => {
    log(`Serving on http://0.0.0.0:${port}`);
  });
})();
