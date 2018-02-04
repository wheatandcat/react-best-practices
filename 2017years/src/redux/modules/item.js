// @flow
import { put, call, select } from "redux-saga/effects"
import fetch from "node-fetch"

// Types

export type Item = {
  +id: number,
  +name: string,
  +description: string,
}

export type State = {
  +items: Array<Item>,
}

export type Action =
  | {
      type: "ITEM/GET",
    }
  | {
      type: "ITEM/CHANGE_ITEMS",
      +payload: Array<Item>,
    }

export const changeItems = (items: Array<Item>) => ({
  payload: items,
  type: "ITEM/CHANGE_ITEMS",
})

const initState = {
  items: [],
}

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case "ITEM/CHANGE_ITEMS":
      return { ...state, items: action.payload }
    default:
      return state
  }
}

// saga
const getToken = (state: State) => state.signin.token

export function* itemsSaga() {
  const token = yield select(getToken)

  if (!token) {
    return
  }

  const response = yield call(fetch, "http://localhost:8080/items", {
    mode: "cors",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = yield response.json()

  yield put(changeItems(data))
}
