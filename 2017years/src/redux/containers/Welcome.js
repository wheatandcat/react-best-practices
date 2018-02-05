// @flow
import { connect } from "react-redux"
import type { Dispatch } from "redux"
import { getItems } from "../modules/item"
import type { State } from "../modules"
import Welcome from "../../components/Pages/Welcome/Page"

const mapStateToProps = (state: State) => ({
  items: state.item.items,
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  onGet: () => dispatch(getItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
