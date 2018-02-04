// @flow
import { connect } from "react-redux"
import type { Dispatch } from "redux"
import Page from "../../components/Pages/SignOut/Page"
import { signout } from "../modules/signin"

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  onSignOut: () => dispatch(signout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
