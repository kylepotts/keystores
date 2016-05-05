import { combineReducers } from 'redux'
import * as c from '../actions/constants'
import assign from 'lodash.assign';
import validateEmail from '../validators/emailValidation'
import {registerModalVisable, registerForm, registerUser} from './registerReducers'

const keystoreApp = combineReducers({
  registerModalVisable,
  registerForm,
  registerUser
})

export default keystoreApp
