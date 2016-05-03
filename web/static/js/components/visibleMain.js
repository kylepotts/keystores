import { connect } from 'react-redux'
import { showRegisterModal, hideRegisterModal } from '../actions/actions'
import Main from './main'

const mapStateToProps = (state) => {
  return {
    is_visable: state.registerModalVisable
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterButtonClick: () => {
      dispatch(showRegisterModal())
    },
    onRegisterClose: () => {
      dispatch(hideRegisterModal())
    }
  }
}

const VisibleMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default VisibleMain
