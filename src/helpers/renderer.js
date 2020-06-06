import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // extracting all the tags stored in Helmet
  const helmet = Helmet.renderStatic();

  // sending the javascript file so the browser will laod it on client side
  return `
    <html>
       <head>
 
        ${helmet.title.toString()}
        ${helmet.meta.toString()} 

       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
       </head>
       <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
       </body> 
    </html>
  `;
};
