import {
  GET_CLIENTS_PENDING,
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_REJECTED,
} from '../actions/clients.action'

const initialState = {
  loading: false,
  errors: null,
  searchValue: '',
  clients: [],
  filterClients: null,
}

const clients = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CLIENTS_PENDING:
      return {
        ...state,
        loading: true,
      }

    case GET_CLIENTS_FULFILLED:
      return {
        ...state,
        clients: payload,
        loading: false,
      }

    case GET_CLIENTS_REJECTED:
      return {
        ...state,
        errors: payload,
        loading: false,
      }
    default: {
      return state
    }
  }
}

export default clients
