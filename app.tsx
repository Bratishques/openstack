import * as express from 'express'
import * as mongoose from "mongoose"
import * as React from 'react';
import * as Redux from "redux";
import { DBData } from './database';
import * as ReactDOMServer from 'react-dom/server';
import { Provider as ReduxProvider } from "react-redux";
import App from './login-app/src/components/app';
import { StaticRouter } from 'react-router-dom';
import { changeTitle } from './redux/reducers/title';

declare const module: any;

function main() {
  const app = express();
  const PORT = 8000;

  mongoose.connect(DBData.url, DBData.options, () => {
    try {
      console.log(`Database connected`)
    }
    catch (e) {
      console.log(`Database error: ${e}`)
    }
  })

  app.use(express.static('./build'));

  app.get('/*', (req, res, next) => {
    const sub: string[] = req.subdomains

    const store = Redux.createStore(changeTitle);
    const appInitialState = JSON.stringify(store.getState()).replace(
      /</g,
      "\\u003c"
    );
    if (sub.length === 0) {


      const context = {}
      const body = ReactDOMServer.renderToString(
        <ReduxProvider store={store}>
          <StaticRouter location={req.path} context={context}>
            <App />
          </StaticRouter>
        </ReduxProvider>

      );

      res.send(`
      <!DOCTYPE html>
      <html>
          <head>
              <title>TypeScript ReactJS SSR App</title>
              <style>
                  body {
                      margin: 0px;
                      padding: 0px;
                  }
              </style>
              <style id="jss-server-side"></style>
          </head>
          <body>
              <main id="app">${body}</main>
              <script>
              window["__PRELOADED_STATE__"] = ${appInitialState}
              </script>
              <script type="application/javascript" src="bundle.js"></script>
          </body>
      </html>
  `)

      res.end();
      next();
    }

    else {
      const subdom = sub[0]
      res.send(`Your subdomain is: ${subdom}`)
    }
  }


  )


  const server = app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }

}

main()




