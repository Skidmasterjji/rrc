const express = require("express");
const app = express();

const SECRET_KEY = process.env.API_KEY || "changeme"; // set in Render

app.get("/data", (req, res) => {
    if (req.query.key !== SECRET_KEY) {
        return res.status(403).send("Forbidden");
    }
    res.send("E");
});

app.listen(10000, () => console.log("API running"));
