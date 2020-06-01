import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {/* <Routes /> */}
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
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
