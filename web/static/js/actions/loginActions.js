import * as c from './constants'
import makeActionCreator from './actions'
import fetch from 'isomorphic-fetch'
/*
 * action creators
 */

export const showLoginModal = makeActionCreator(c.SHOW_LOGIN_MODAL)
