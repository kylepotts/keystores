import React from "react"
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import LoginModal from '../presentation/loginModal'


import "../../../css/app.css";

class Navb extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    if(this.props.loginData.loginData && this.props.loginData.loginData.type === 'success') {
      window.location = '/about'
    }
    return (
      <div>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Keystores</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='#' onClick={this.props.onLoginButtonClicked} > Login </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoginModal
          is_visible={this.props.isLoginModalVisible}
          onLoginCloseClicked={this.props.onLoginCloseClicked}
          values={this.props.loginFormValues}
          onUpdateField={this.props.onUpdateField}
          onLoginSubmit={this.props.onLoginSubmit}
          loginData={this.props.loginData}/>
      </div>
    )
  }
}

export default Navb
