// @flow
import { type Store as ReduxStore, combineReducers } from "redux"
import { all, takeLatest } from "redux-saga/effects"
import signin, {
  type State as SigninState,
  type Action as SigninAction,
  signinSaga,
  authSaga,
  signoutSaga,
} from "./signin"
import item, {
  type State as ItemState,
  type Action as ItemAction,
  itemsSaga,
} from "./item"

export type State = {
  +signin: SigninState,
  +item: ItemState,
}

export type Action = SigninAction | ItemAction

export type Store = ReduxStore<State, Action>

export default combineReducers({
  signin,
  item,
})

export function* rootSaga() {
  yield all([
    takeLatest("SIGNIN/SIGNIN", signinSaga),
    takeLatest("SIGNIN/SIGNOUT", signoutSaga),
    takeLatest("SIGNIN/AUTH", authSaga),
    takeLatest("ITEM/GET", itemsSaga),
  ])
}
