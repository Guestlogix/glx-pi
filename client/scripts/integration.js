"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const http = require("http");
const pathUtils = require("path");
const express = require("express");
const cypress = require("cypress");
const chalk = require("chalk");
const app = express();
const appDir = pathUtils.resolve(__dirname, "../build");

const PROTOCOL = process.env.HTTPS === "true" ? "https://" : "http://";
const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const SYSTEM_COLLECTIONURI = process.env.SYSTEM_COLLECTIONURI || null;
const SYSTEM_TEAMPROJECTID = process.env.SYSTEM_TEAMPROJECTID || null;
const BUILD_BUILDID = process.env.BUILD_BUILDID || null;
const ci_url = `${SYSTEM_COLLECTIONURI}/${SYSTEM_TEAMPROJECTID}/_build/results?buildId=${BUILD_BUILDID}`;

app.use(express.static(appDir));

app.get("*", (req, res) => {
  res.sendFile(pathUtils.resolve(appDir, "index.html"));
});

http.createServer(app).listen(PORT, () => {
  const url = `${PROTOCOL}${HOST}:${PORT}`;
  console.log(`Express server listening on port ${chalk.bold(PORT)}`);
  console.log(chalk.cyan(url));

  cypress
    .run({
      reporter: "junit",
      record: "true",
      headed: "false",
      //ciBuildId: ci_url,
      config: {
        baseUrl: url,
        chromeWebSecurity: false,
      },
    })
    .then(results => {
      console.log(
        chalk.cyan(`Total Tests: ${chalk.cyan(chalk.bold(results.totalTests))}`)
      );
      console.log(
        chalk.cyan(
          `Total Passed: ${chalk.green(chalk.bold(results.totalPassed))}`
        )
      );
      console.log(
        chalk.cyan(
          `Total Failed: ${chalk.red(chalk.bold(results.totalFailed))}`
        )
      );
      console.log();
      console.log(chalk.cyan(`Dashboard: ${chalk.bold(results.runUrl)}`));
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      process.exit();
    });
});
