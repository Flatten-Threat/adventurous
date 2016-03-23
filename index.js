import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './views/home'
import Travels from './views/travels'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="travels" component={Travels}/>
    </Route>
  </Router>
), document.getElementById('content'))
