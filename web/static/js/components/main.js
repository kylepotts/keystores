import React from "react"
import {Navbar, Jumbotron, Button, Modal, Form, FormGroup, FormControl, ControlLabel, InputGroup, Col} from 'react-bootstrap'
import RegisterModal from './registerModal'



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
    console.log(this.props)
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
          <RegisterModal
            is_visible={this.props.is_visible}
            onRegisterClose={this.props.onRegisterClose}
            onUpdateField={this.props.onUpdateField}
            values={this.props.registerFormValues}
            />
        </div>
      </div>
    )
  }
}

export default Main
