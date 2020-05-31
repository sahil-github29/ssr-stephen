import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  // sending the javascript file so the browser will laod it on client side
  return `
    <html>
       <head><head>
       <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
       </body> 
  `;
};
