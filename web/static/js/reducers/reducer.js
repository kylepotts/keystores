import { combineReducers } from 'redux'
import {HIDE_REGISTER_MODAL, SHOW_REGISTER_MODAL} from '../actions/actions'

function registerModalVisable(state = false, action) {
  switch (action.type) {
    case HIDE_REGISTER_MODAL:
      return false

    case SHOW_REGISTER_MODAL:
      return true

    default:
      return state
  }
}

const keystoreApp = combineReducers({
  registerModalVisable
})

export default keystoreApp
