/*
 * action types
 */

export const SHOW_REGISTER_MODAL = 'SHOW_REGISTER_MODAL'
export const HIDE_REGISTER_MODAL = 'HIDE_REGISTER_MODAL'
export const REGISTER_FORM_UPDATE_VALUE = 'REGISTER_FORM_UPDATE_VALUE'
export const REGISTER_FORM_RESET_VALUE  = 'REGISTER_FORM_RESET_VALUE'


/*
 * action creators
 */

export function showRegisterModal() {
  return { type: SHOW_REGISTER_MODAL}
}

export function hideRegisterModal() {
  return { type: HIDE_REGISTER_MODAL}
}

export function updateRegisterForm(name,value){
  return {type: REGISTER_FORM_UPDATE_VALUE, name, value}
}

export function resetRegisterForm(){
  return {type: REGISTER_FORM_RESET_VALUE}
}
