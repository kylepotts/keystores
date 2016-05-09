import { connect } from 'react-redux'
import { showRegisterModal, hideRegisterModal, updateRegisterForm, resetRegisterForm, submitRegister, resetRegisterData } from '../../actions/registerActions'
import Main from '../presentation/main'

const mapStateToProps = (state) => {

  return {
    is_visible: state.registerModalVisable,
    registerFormValues: state.registerForm,
    userRegistration: state.registerUser
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
      dispatch(resetRegisterData())

    },

    onSubmitRegister: (username,password) => {
      dispatch(submitRegister(username, password))
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
