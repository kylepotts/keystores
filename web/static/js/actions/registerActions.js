import * as c from './constants'
import makeActionCreator from './actions'
/*
 * action creators
 */

export const showRegisterModal = makeActionCreator(c.SHOW_REGISTER_MODAL)
export const hideRegisterModal = makeActionCreator(c.HIDE_REGISTER_MODAL)
export const updateRegisterForm = makeActionCreator(c.REGISTER_FORM_UPDATE_VALUE, 'name', 'value')
export const resetRegisterForm = makeActionCreator(c.REGISTER_FORM_RESET_VALUE)
