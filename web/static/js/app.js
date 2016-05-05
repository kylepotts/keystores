import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import VisibleMain from "./components/container/visibleMain"
import Temp from "./components/presentation/temp"
import keystoreApp from './reducers/reducer'
import { Router, Route, Link, browserHistory } from 'react-router'

let store = createStore(keystoreApp)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={VisibleMain}/>
      <Route path="/about" component={Temp}/>
    </Router>
  </Provider>)
  ,document.getElementById("root")
)
