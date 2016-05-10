import React from "react"
import {Navbar, Nav, NavItem} from 'react-bootstrap'



import "../../../css/app.css";

class Navb extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
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
              <NavItem eventKey={1} href='#' onClick={() => {console.log('ye')}} > Login </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navb
