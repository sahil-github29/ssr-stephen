import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  const content = renderToString(<Home />);

  // sending the javascript file so the browser will laod it on client side
  const html = `
    <html>
       <head><head>
       <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
       </body>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port  3000");
});
