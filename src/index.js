import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const store = createStore();
  res.send(renderer(req, store)); // passing req object for <StaticRouter>
});

app.listen(3000, () => {
  console.log("Listening on port  3000");
});
