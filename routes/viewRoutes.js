const path = require("path");

module.exports = (app) => {

    // View Routes


    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });