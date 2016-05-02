import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/main"
import Temp from "./components/temp"
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/about" component={Temp}/>
</Router>),document.getElementById("root")
)
