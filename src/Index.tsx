import 'core-js'

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import counterRoot from "./counter/Root";
import chartRoot from "./chart/Root";
import {Provider} from "react-redux";
import store from "./Store";
import {Paths} from "./Models";

// TODO スタイルシート読込がここで適切かどうか要検討
require("./stylesheets/index.scss");

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Root} >
        <Route path={Paths.COUNTER} component={counterRoot} />
        <Route path={Paths.CHART} component={chartRoot} />
        <Route path={Paths.NEWS} component={NotFound} />
        <Route path={Paths.CONFIG} component={NotFound} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);