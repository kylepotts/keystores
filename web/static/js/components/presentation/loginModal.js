import React, { PropTypes } from 'react'
import {Alert, Button, Modal, Form, FormGroup, FormControl, ControlLabel, InputGroup, Col} from 'react-bootstrap'

import '../../../css/loginModal.css'

function toDisableButtons(values) {
  if (values.email !== "" && values.password !== "") {
    return false
  } else {
    return true
  }
}

class ErrorPanel extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    if(this.props.loginData !== null && this.props.loginData.type === 'error') {
      return (
        <Alert bsStyle='danger'>
          {this.props.loginData.error}
        </Alert>
      )
    } else {
      return (
        null
      )
    }
  }
}

const LoginModal = ({is_visible, onLoginCloseClicked, values, onUpdateField, onLoginSubmit, loginData}) => (
  <Modal show={is_visible} onHide={onLoginCloseClicked}>
    <div className='modal-header'> Login </div>
    <Modal.Body>
      <Form horizontal>
        <Col componentClass={ControlLabel} sm={2}>Email</Col>
        <Col sm={10}>
        <FormGroup controlId="formHorizontalEmail">
          <FormControl type="text" placeholder="Email" value={values.email} onChange={(e) => {onUpdateField('email', e.target.value) }}/>
        </FormGroup>
      </Col>
      <Col componentClass={ControlLabel} sm={2}>password</Col>
      <Col sm={10}>
        <FormGroup controlId="formHorizontalPassword">
          <FormControl type="password" placeholder="password" values={values.password} onChange={(e) => {onUpdateField('password', e.target.value) }}/>
        </FormGroup>
      </Col>
      <Col componentClass={ControlLabel} sm={2}></Col>
      <Col sm={10}>
        <FormGroup controlId="formHorizontalPasswordConfirm">
          <ErrorPanel loginData={loginData.loginData} />
        </FormGroup>
      </Col>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onLoginCloseClicked}>Close</Button>
      <Button bsStyle='success' disabled={toDisableButtons(values)} onClick={() => {onLoginSubmit(values.email, values.password)}}>Login</Button>
    </Modal.Footer>
  </Modal>
)

export default LoginModal
