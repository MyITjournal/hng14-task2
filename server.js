// Vercel entry point — exports the Express app for serverless deployment
import "dotenv/config";
import app from "./src/app.js";
import { initDb } from "./src/db/index.js";

try {
  await initDb();
} catch (err) {
  console.error("DB init failed:", err.message);
}

export default app;
