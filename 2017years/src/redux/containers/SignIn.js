// @flow
import { connect } from "react-redux"
import type { Dispatch } from "redux"
import Page from "../../components/Pages/SignIn/Page"
import { changeEmail, changePassword, signin } from "../modules/signin"
import type { State } from "../modules"

const mapStateToProps = (state: State) => ({
  email: state.signin.email,
  password: state.signin.password,
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  changeEmail: email => dispatch(changeEmail(email)),
  changePassword: password => dispatch(changePassword(password)),
  onSignIn: () => dispatch(signin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
