import { connect } from 'react-redux'
import {showLoginModal, hideLoginModal, updateLoginForm, resetLoginForm, submitLogin} from '../../actions/loginActions'
import Navbar from '../presentation/navbar'

const mapStateToProps = (state) => {
  return {
    isLoginModalVisible: state.loginModalVisible,
    loginFormValues: state.loginForm,
    loginData: state.loginUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onLoginButtonClicked: () => {
      dispatch(showLoginModal())
    },

    onLoginCloseClicked: () => {
      dispatch(hideLoginModal())
      dispatch(resetLoginForm())
    },

    onUpdateField:(name,value) => {
      dispatch(updateLoginForm(name, value))
    },

    onLoginSubmit:(username, password) => {
      console.log(username)
      dispatch(submitLogin(username, password))
    }

  }
}

const VisibleNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default VisibleNavBar
