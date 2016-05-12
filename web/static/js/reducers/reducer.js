import { combineReducers } from 'redux'
import * as c from '../actions/constants'
import assign from 'lodash.assign';
import validateEmail from '../validators/emailValidation'
import {registerModalVisable, registerForm, registerUser} from './registerReducers'
import {loginModalVisible, loginForm, loginUser} from './loginReducers.js'

const keystoreApp = combineReducers({
  registerModalVisable,
  registerForm,
  registerUser,
  loginModalVisible,
  loginForm,
  loginUser
})

export default keystoreApp
