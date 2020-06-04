import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com/", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  // we need the components on the user's requested route before loading the application
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // calling all the pending network request and render the page once all the requests done
  Promise.all(promises).then(() => {
    res.send(renderer(req, store)); // passing req object for <StaticRouter>
  });
});

app.listen(3000, () => {
  console.log("Listening on port  3000");
});
