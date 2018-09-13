import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import clients from './redux/reducers/clients.reducer'

const store = createStore(clients, composeWithDevTools(
  applyMiddleware(
    thunk,
    promiseMiddleware(),
  ),
))

export default store
