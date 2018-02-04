import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import persistState from "redux-localstorage"
import rootReducer, { rootSaga } from "./modules"

const slicer = () => state => ({
  signin: {
    token: state.signin.token,
  },
})

const configureStore = history => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      applyMiddleware(sagaMiddleware),
      persistState("", {
        key: "redux",
        slicer,
      })
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
