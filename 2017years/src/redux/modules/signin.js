// @flow
import { put, call, select } from "redux-saga/effects"
import fetch from "node-fetch"

// Types

export type State = {
  +email: string,
  +password: string,
  +signedIn: boolean,
  +token: string,
}

export type Action =
  | {
      type: "SIGNIN/CHANGE_EMAIL",
      +payload: string,
    }
  | {
      type: "SIGNIN/CHANGE_PASSWORD",
      +payload: string,
    }
  | {
      type: "SIGNIN/SIGNIN",
    }
  | {
      type: "SIGNIN/SIGNEDIN",
      +payload: boolean,
    }
  | {
      type: "SIGNIN/AUTH",
    }
  | {
      type: "SIGNIN/CHANGE_TOKEN",
      +payload: string,
    }
// Actions

export const changeEmail = (email: string) => ({
  payload: email,
  type: "SIGNIN/CHANGE_EMAIL",
})

export const changePassword = (password: string) => ({
  payload: password,
  type: "SIGNIN/CHANGE_PASSWORD",
})

export const signin = () => ({
  type: "SIGNIN/SIGNIN",
})

export const signedIn = (sigined: boolean) => ({
  payload: sigined,
  type: "SIGNIN/SIGNEDIN",
})

export const changeToken = (token: string) => ({
  payload: token,
  type: "SIGNIN/CHANGE_TOKEN",
})

export const auth = () => ({
  type: "SIGNIN/AUTH",
})

export const signout = () => ({
  type: "SIGNIN/SIGNOUT",
})

// Reducers

const initState = {
  email: "",
  password: "",
  signedIn: false,
  token: "",
}

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case "SIGNIN/CHANGE_EMAIL":
      return { ...state, email: action.payload }
    case "SIGNIN/CHANGE_PASSWORD":
      return { ...state, password: action.payload }
    case "SIGNIN/SIGNEDIN":
      return { ...state, signedIn: action.payload }
    case "SIGNIN/CHANGE_TOKEN":
      return { ...state, token: action.payload }
    default:
      return state
  }
}

// saga
const getSignin = (state: { signin: State }) => state.signin

export function* signinSaga(): Generator<*, *, *> {
  const { email, password } = yield select(getSignin)

  const response = yield call(fetch, "http://localhost:8080/sigin", {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const { token } = yield response.json()

  yield put(signedIn(true))
  yield put(changeToken(token))
}

export function* authSaga(): Generator<*, *, *> {
  const { token } = yield select(getSignin)

  if (!token) {
    return
  }

  const response = yield call(fetch, "http://localhost:8080/auth", {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const { signed } = yield response.json()

  yield put(signedIn(signed))
}

export function* signoutSaga(): Generator<*, *, *> {
  yield put(changeToken(""))
  yield put(signedIn(false))
}
