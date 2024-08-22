import dotenv from "dotenv";
// import { bot } from "./utils/bot";
dotenv.config();

import { initBot } from "./entryPoints/bot";
import { initCron } from "./entryPoints/cron";
import AppDataSource from "./orm";
import logger from "./utils/logger";

async function main() {
  logger.info("Starting app...");
  await AppDataSource.initialize();
  logger.info("Data Source has been initialized!");
  if (process.env.EXEC_MODE === "bot") {
    await initBot();
  }
  // if (process.env.EXEC_MODE === "cron") {
  //   await initCron();
  // }
}

main();
