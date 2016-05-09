import * as c from './constants'
import makeActionCreator from './actions'
import fetch from 'isomorphic-fetch'
/*
 * action creators
 */

export const showRegisterModal = makeActionCreator(c.SHOW_REGISTER_MODAL)
export const hideRegisterModal = makeActionCreator(c.HIDE_REGISTER_MODAL)
export const updateRegisterForm = makeActionCreator(c.REGISTER_FORM_UPDATE_VALUE, 'name', 'value')
export const resetRegisterForm = makeActionCreator(c.REGISTER_FORM_RESET_VALUE)
export const startRegister = makeActionCreator(c.START_REGISTER)
export const receiveRegisterData = makeActionCreator(c.RECEIVE_REGISTER_DATA, 'registrationData')
export const resetRegisterData  = makeActionCreator(c.RESET_REGISTER_DATA)


export function submitRegister(username, password) {
  return function(dispatch) {
    dispatch(startRegister())

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then( response => response.json())
    .then( json => dispatch(receiveRegisterData(json)))
  }
}
