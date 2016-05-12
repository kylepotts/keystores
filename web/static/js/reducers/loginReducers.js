import * as c from '../actions/constants'
import assign from 'lodash.assign';

export function loginModalVisible(state = false, action) {
  switch (action.type) {
    case c.HIDE_LOGIN_MODAL:
      return false

    case c.SHOW_LOGIN_MODAL:
      return true

    default:
      return state
  }
}

export function loginUser(state = { isFetching: false, loginData: null}, action) {
  switch(action.type){
    case c.START_LOGIN:
      return assign({}, state, {
        isFetching: true
      })

    case c.RECEIVE_LOGIN_DATA:
      return assign({}, state, {
        isFetching: false,
        loginData: action.loginData
      })

    case c.RESET_LOGIN_DATA:
      return assign({}, state, {
        ['isFetching']: false,
        ['loginData']: null
      })


    default:
      return state
  }
}

export function loginForm(state = {email: '', password: ''}, action) {
  switch(action.type){
    case c.LOGIN_FORM_UPDATE_VALUE:
      return assign({}, state, {
        [action.name]: action.value,
      })

    case c.LOGIN_FORM_RESET_VALUE:
    return assign({}, state, {
      ['password']: '',
      ['email']: ''
    })
    default:
      return state
  }
}
