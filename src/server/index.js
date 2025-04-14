"use strict";

import path from "node:path";
import express from "express";
import bodyParser from "body-parser";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const port = process.env.PORT ? process.env.PORT : 8080;

let app = express();
app.use(express.static(path.join(__dirname, "../../public")));
// app.use(express.static(path.join(__dirname, "../../solution")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(port, () => {
  console.log(`Website running: ${server.address().port}`);
});
