const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const aylien = require("aylien_textapi");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

const port = 8081;

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log(`server listening on port ${port}!`);
});

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

// load key variables
dotenv.config();

// aylienapi
const textapi = new aylien({
  application_id: process.env.AYLIEN_APP_ID,
  application_key: process.env.AYLIEN_API_KEY,
});

app.post("/analysis", (req, res) => {
  console.log("Sending Aylien request...");
  textapi.combined(
    {
      url: req.body.url,
      endpoint: ["sentiment", "extract", "hashtags"],
    },
    (error, response) => {
      if (error == null) {
        console.log("Success! Sending response from Aylien");
        console.log(response);
        response.results.forEach((r) => {
          console.log(r.endpoint + ":");
          console.log(r.result);
        });
        res.send(response);
      } else {
        console.log("Aylien request error: ", error);
        res.send(error);
      }
    }
  );
});

app.post("/text", (req, res) => {
  console.log("Sending Aylien request...");
  console.log(req.body);
  textapi.combined(
    {
      text: req.body.text,
      endpoint: ["sentiment", "extract", "hashtags"],
    },
    (error, response) => {
      if (error == null) {
        console.log("Success! Sending response from Aylien");
        console.log(response);
        response.results.forEach((r) => {
          console.log(r.endpoint + ":");
          console.log(r.result);
        });
        res.send(response);
      } else {
        console.log("Aylien request error: ", error);
        res.send(error);
      }
    }
  );
});
