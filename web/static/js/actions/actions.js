/*
 * action types
 */

export const SHOW_REGISTER_MODAL = 'SHOW_REGISTER_MODAL'
export const HIDE_REGISTER_MODAL = 'HIDE_REGISTER_MODAL'


/*
 * action creators
 */

export function showRegisterModal() {
  return { type: SHOW_REGISTER_MODAL}
}

export function hideRegisterModal() {
  return { type: HIDE_REGISTER_MODAL}
}
