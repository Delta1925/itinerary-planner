import puppeteer from "puppeteer";
import finalhandler from "finalhandler";
import serveStatic from "serve-static";
import http from "http";
import { argv } from "node:process";

const margin = 50;

const port = argv[2] ? parseInt(argv[2]) : 3000;

var serve = serveStatic("dist", { index: "index.html" });
var server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});
server.listen(port);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:".concat(port), {
    waitUntil: "networkidle0",
  });

  await page.click('button[id="hide_prompt"]');

  await page.pdf({
    path: "dist/export.pdf",
    format: "A4",
    margin: {
      top: margin,
      left: margin,
      bottom: margin,
      right: margin,
    },
  });

  await browser.close();
  server.close();
})();
