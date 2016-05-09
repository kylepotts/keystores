import { combineReducers } from 'redux'
import * as c from '../actions/constants'
import assign from 'lodash.assign';
import validateEmail from '../validators/emailValidation'

export function registerModalVisable(state = false, action) {
  switch (action.type) {
    case c.HIDE_REGISTER_MODAL:
      return false

    case c.SHOW_REGISTER_MODAL:
      return true

    default:
      return state
  }
}

function validate(name,value, state){
  switch(name){
    case 'email':
      let validEmail = validateEmail(value)
      if(validEmail){
        return 'success'
      } else {
        return 'error'
      }

    case 'password':
      if(value.length < 6){
        return 'error'
      } else {
        return 'success'
      }

      case 'passwordConfirm':
        if(value === state.password){
          return 'success'
        } else {
          return 'error'
        }

  }
}

export function registerUser(state = { isFetching: false, registrationData: null}, action) {
  switch(action.type){
    case c.START_REGISTER:
      return assign({}, state, {
        isFetching: true
      })

    case c.RECEIVE_REGISTER_DATA:
      return assign({}, state, {
        isFetching: false,
        registrationData: action.registrationData
      })

    case c.RESET_REGISTER_DATA:
      return assign({}, state, {
        ['isFetching']: false,
        ['registrationData']: null
      })


    default:
      return state
  }
}

export function registerForm(state = {email: '', password: '', passwordConfirm: ''}, action) {
  switch(action.type){
    case c.REGISTER_FORM_UPDATE_VALUE:
      return assign({}, state, {
        [action.name]: action.value,
        [`${action.name}ValidType`]: validate(action.name, action.value, state)
      })

    case c.REGISTER_FORM_RESET_VALUE:
    return assign({}, state, {
      ['password']: '',
      ['passwordValidType']: null,
      ['passwordConfirm']: '',
      ['passwordConfirmValidType']: null,
      ['email']: '',
      ['emailValidType']: null
    })
    default:
      return state
  }
}
