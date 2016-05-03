import { connect } from 'react-redux'
import { showRegisterModal, hideRegisterModal, updateRegisterForm, resetRegisterForm } from '../actions/actions'
import Main from './main'

const mapStateToProps = (state) => {
  return {
    is_visible: state.registerModalVisable,
    registerFormValues: state.registerForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterButtonClick: () => {
      dispatch(showRegisterModal())
    },
    onRegisterClose: () => {
      dispatch(hideRegisterModal())
      dispatch(resetRegisterForm())
    },

    onUpdateField:(name,value) => {
      dispatch(updateRegisterForm(name,value))
    }
  }
}

const VisibleMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default VisibleMain
