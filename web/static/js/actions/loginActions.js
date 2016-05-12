import * as c from './constants'
import makeActionCreator from './actions'
import fetch from 'isomorphic-fetch'
/*
 * action creators
 */

export const showLoginModal = makeActionCreator(c.SHOW_LOGIN_MODAL)
export const hideLoginModal = makeActionCreator(c.HIDE_LOGIN_MODAL)
export const updateLoginForm = makeActionCreator(c.LOGIN_FORM_UPDATE_VALUE, 'name', 'value')
export const resetLoginForm = makeActionCreator(c.LOGIN_FORM_RESET_VALUE)
export const startLogin = makeActionCreator(c.SUBMIT_LOGIN)
export const receiveLoginData = makeActionCreator(c.RECEIVE_LOGIN_DATA, 'loginData')


export function submitLogin(username, password) {
  return function(dispatch) {
    dispatch(startLogin())

    fetch('/api/login', {
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
    .then( json => dispatch(receiveLoginData(json)))
  }
}
