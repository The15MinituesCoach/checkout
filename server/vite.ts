import express from "express";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
import type { Express } from "express";
import type { Server } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: Express, server: Server) {
  const { createServer: createViteServer } = await import("vite");
  // @ts-ignore
  const viteConfig = (await import("../../vite.config.js")).default;

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: ["localhost", "the15minutescoach.com"]
    },
    appType: "custom"
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    try {
      const templatePath = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(templatePath, "utf-8");
      template = template.replace(`src="/src/main.tsx"`, `src="/src/main.tsx?v=${nanoid()}"`);
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(`Build output not found at ${distPath}`);
  }

  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
