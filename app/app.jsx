import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components
import Main from 'Main';

// Foundation
import 'foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// Custom CSS
import 'appStyles';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
