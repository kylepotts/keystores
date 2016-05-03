import React, { PropTypes } from 'react'
import {Button, Modal, Form, FormGroup, FormControl, ControlLabel, InputGroup, Col} from 'react-bootstrap'

import "../../css/registerModal.css";

const RegisterModal = ({is_visible, onRegisterClose, onUpdateField, values}) => (
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
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onRegisterClose}>Close</Button>
      <Button bsStyle='success'>Sign Up</Button>
    </Modal.Footer>
  </Modal>
)

export default RegisterModal
