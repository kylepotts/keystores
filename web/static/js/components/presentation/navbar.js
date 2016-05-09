import React from "react"
import {Navbar} from 'react-bootstrap'



import "../../../css/app.css";

class Nav extends React.Component {

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
      </div>
    )
  }
}

export default Nav
