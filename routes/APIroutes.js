const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
const readFile = fs.readFile;

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        readFile("./db/db.json", (error, data) => {
            let db = JSON.parse(data);
            if (error) throw console.log(error);
            res.json(db);
        });
    });
}