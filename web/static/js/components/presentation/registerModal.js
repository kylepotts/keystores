import React, { PropTypes } from 'react'
import {Alert, Button, Modal, Form, FormGroup, FormControl, ControlLabel, InputGroup, Col} from 'react-bootstrap'

import "../../../css/registerModal.css";

function onSubmitClick(values, register) {

  if (values.emailValidType === 'success' &&  values.passwordValidType === 'success' && values.passwordConfirmValidType === 'success'){
    register(values.email, values.password)
  }

}

function toDisableButtons(values, registerData) {
  if (values.emailValidType === 'success' &&  values.passwordValidType === 'success' && values.passwordConfirmValidType === 'success'){
    
    if(registerData.registrationData !== null && registerData.registrationData.type === 'error') {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

class ErrorPanel extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    if(this.props.registerData.registrationData !== null) {
      return (
        <Alert bsStyle='danger'>
          {this.props.registerData.registrationData.error}
        </Alert>
      )
    } else {
      return (
        null
      )
    }
  }
}

const RegisterModal = ({is_visible, onSubmitRegister, onRegisterClose, onUpdateField, values, registerData}) => (
  <Modal show={is_visible} onHide={onRegisterClose}>
    <div className='modal-header'> Sign Up </div>
    <Modal.Body>
      <Form horizontal>
        <Col componentClass={ControlLabel} sm={2}>Email</Col>
        <Col sm={10}>
        <FormGroup controlId="formHorizontalEmail" validationState={values.emailValidType}>
          <FormControl type="text" placeholder="Email" value={values.email} onChange={(e) => {onUpdateField('email', e.target.value) }}/>
        </FormGroup>
      </Col>
      <Col componentClass={ControlLabel} sm={2}>password</Col>
      <Col sm={10}>
        <FormGroup controlId="formHorizontalPassword" validationState={values.passwordValidType}>
          <FormControl type="password" placeholder="password" onChange={(e) => {onUpdateField('password', e.target.value) }}/>
        </FormGroup>
      </Col>
      <Col componentClass={ControlLabel} sm={2}>verify password</Col>
      <Col sm={10}>
        <FormGroup controlId="formHorizontalPasswordConfirm" validationState={values.passwordConfirmValidType}>
          <FormControl type="password" placeholder="password" onChange={(e) => {onUpdateField('passwordConfirm', e.target.value) }}/>
        </FormGroup>
      </Col>
      <Col componentClass={ControlLabel} sm={2}></Col>
      <Col sm={10}>
        <FormGroup controlId="formHorizontalPasswordConfirm">
          <ErrorPanel registerData={registerData}/>
        </FormGroup>
      </Col>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onRegisterClose}>Close</Button>
      <Button bsStyle='success' disabled={toDisableButtons(values, registerData)} onClick={() => {onSubmitClick(values, onSubmitRegister)}}>Sign Up</Button>
    </Modal.Footer>
  </Modal>
)

export default RegisterModal
