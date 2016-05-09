import { connect } from 'react-redux'
import { showRegisterModal, hideRegisterModal, updateRegisterForm, resetRegisterForm, submitRegister, resetRegisterData } from '../../actions/registerActions'
import Navbar from '../presentation/navbar'

const mapStateToProps = (state) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const VisibleNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default VisibleNavBar
