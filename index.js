const express = require("express");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
// const videosRoutes = require("./routes/videosRoute");
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// app.use("/videos", videosRoutes);

/*
 *read mocktails.json file
 */
function loadMocktailsData(callback) {
  fs.readFile("./MocktailData/Mocktails.json", "utf8", callback);
}

/*
 *Get all the mocktailss
 */
app.get("/Mocktails", (req, res) => {
  loadMocktailsData((err, data) => {
    if (err) {
      res.send("Sorry no mocktails today😔");
    } else {
      const mocktail = JSON.parse(data);
      res.json(mocktail);
    }
  });
});

//get mocktails cold weather
app.get("/Mocktails", function (req, res) {
  res.send("Welcome to the video API Server");
});

app.listen(PORT, function () {
  console.log("Hello our server is up and running");
});
