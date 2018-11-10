const express = require("express");
const app = express();
const path = require("path");
const distFilePath = path.join(__dirname, "dist/index.html");
app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(distFilePath)
});
app.listen(4000, () => console.log("Listening on 4000"))