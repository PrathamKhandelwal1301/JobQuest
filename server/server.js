import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is running properly");
});

app.listen(PORT, (req, res) => {
  console.log("the server is running on port 8080");
});
