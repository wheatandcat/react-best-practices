// @flow
import { connect } from "react-redux"
import type { Dispatch } from "redux"
import { auth } from "../modules/signin"
import Auth from "../../components/Auth"
import type { State } from "../modules"

const mapStateToProps = (state: State) => ({
  signedIn: state.signin.signedIn,
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  onAuth: () => dispatch(auth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
