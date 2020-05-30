import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home"


export default () => {
    const content = renderToString(<Home />);

  // sending the javascript file so the browser will laod it on client side
 return `
    <html>
       <head><head>
       <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
       </body>
  `
}