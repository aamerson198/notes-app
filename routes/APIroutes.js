const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
const readFile = fs.readFile;