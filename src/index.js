import express from "express";
import Home from "./client/components/Home";
import renderer from "./helpers/renderer"

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {  
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("Listening on port  3000");
});
