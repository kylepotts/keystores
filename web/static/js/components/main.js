import React from "react"
import ReactDOM from "react-dom"
import {Navbar, Jumbotron, Button} from 'react-bootstrap'

import "../../css/app.css";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixedTop={true}>
          <Navbar.Brand>
            <a href="#">Keystores</a>
          </Navbar.Brand>
        </Navbar>
        <div>
          <Jumbotron id='jumbo-parent'>
            <div id='jumbo-child'>
              <h1>Keystores</h1>
              <p>Tired of trying to sync your environment vairbales, use KeyStores to sync for them you!</p>
              <p><Button bsStyle='primary'>Sign Up</Button></p>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Main
