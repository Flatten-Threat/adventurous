import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/app'
import SignInDialog from './components/sign-in-dialog'
import Home from './views/home'
import Travels from './views/travels'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="sign-in" component={SignInDialog}/>
      <Route path="travels" component={Travels}/>
    </Route>
  </Router>
), document.getElementById('content'))
// 