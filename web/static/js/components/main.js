import React from "react"
import ReactDOM from "react-dom"
import {Navbar, Jumbotron, Button, Modal} from 'react-bootstrap'
import { createStore } from 'redux'
import todoApp from '../reducers/reducer'


import "../../css/app.css";

class Main extends React.Component {

  propTypes: {
    is_visable: PropTypes.bool.isRequired,
    onRegisterButtonClick: PropTypes.func.isRequired,
    onRegisterClose: PropTypes.func.isRequired
  }

  constructor(props){
    super(props)
  }

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
              <p><Button bsStyle='primary' onClick={this.props.onRegisterButtonClick}>Sign Up</Button></p>
            </div>
          </Jumbotron>
          <Modal show={this.props.is_visable} onHide={this.props.onRegisterClose}>
            <Modal.Title>Sign Up</Modal.Title>
            <Modal.Body>
              <h4>Text</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onRegisterClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Main
