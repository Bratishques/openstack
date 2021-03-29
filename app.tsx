import * as express from 'express'
import * as mongoose from "mongoose"
import * as React from 'react';
import * as Redux from "redux";
import { DBData } from './database';
import * as ReactDOMServer from 'react-dom/server';
import { Provider as ReduxProvider } from "react-redux";
import LoginApp from './login-app/src/components/app';
import PageApp from './page-app/src/components/app';
import { StaticRouter } from 'react-router-dom';
import { changeTitle } from './redux/reducers/title';
import { Store } from './redux/store';


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

  app.get("/api", (req, res) => {
    res.send("This is an API")
  })

  app.get('/*', (req, res) => {
    const sub: string[] = req.subdomains
   
    if (sub.length === 0) {

      const store = Redux.createStore(changeTitle);
     
      const appInitialState = JSON.stringify(store.getState()).replace(
        /</g,
        "\\u003c"
      );


      const context = {}
      const body = ReactDOMServer.renderToString(
        <ReduxProvider store={store}>
          <StaticRouter location={req.path} context={context}>
            <LoginApp />
          </StaticRouter>
        </ReduxProvider>

      );

      res.send(`
      <!DOCTYPE html>
      <html>
          <head>
              <title>TypeScript ReactJS SSR App</title>
              <link rel="stylesheet" href="global.css">
          </head>
          <body>
              <main id="app">${body}</main>
              <script>
              window["__PRELOADED_STATE__"] = ${appInitialState}
              </script>
              <script type="application/javascript" src="login-bundle.js"></script>
          </body>
      </html>
  `)

      res.end();

    }

    else {
      const subdom = sub[0]
      const store = Redux.createStore(changeTitle);
      const initialState:Store = {
        title: "This is the page app!",
        subdomain: subdom
      }
      const appInitialState = JSON.stringify(initialState).replace(
        /</g,
        "\\u003c"
      );
      console.log(appInitialState)

      const context = {}
      const body = ReactDOMServer.renderToString(
        <ReduxProvider store={store}>
          <StaticRouter location={req.path} context={context}>
            <PageApp />
          </StaticRouter>
        </ReduxProvider>

      );

      res.send(`
      <!DOCTYPE html>
      <html>
          <head>
              <title>TypeScript ReactJS SSR App</title>
              <link rel="stylesheet" href="global.css">
          </head>
          <body>
              <main id="app">${body}</main>
              <script>
              window["__PRELOADED_STATE__"] = ${appInitialState}
              </script>
              <script type="application/javascript" src="page-bundle.js">
              
              </script>
          </body>
      </html>
  `)
      res.end();
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




