import {
  GET_CLIENT_DETAIL,
  GET_CLIENTS_PENDING,
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_REJECTED,
  SEARCH,
} from '../actions/clients.action'

const initialState = {
  loading: false,
  errors: null,
  searchValue: '',
  clients: [],
  filterClients: [],
  clientDetail: null,
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
        filterClients: payload,
        loading: false,
      }

    case GET_CLIENTS_REJECTED:
      return {
        ...state,
        errors: payload,
        loading: false,
      }

    case GET_CLIENT_DETAIL:
      return {
        ...state,
        clientDetail: state.clientDetail === payload ? null : payload,
      }

    case SEARCH: {
      const resultSearch = state.clients.filter((client) => {
        const allInfo = `${client.general.firstName} ${client.general.lastName} ${Object.values(client.job).join(' ')} 
        ${Object.values(client.contact).join(' ')} ${Object.values(client.address).join(' ')}`
        return allInfo.toLowerCase().includes(payload)
      })
      return {
        ...state,
        filterClients: payload === '' ? state.clients : resultSearch,
        loading: false,
      }
    }

    default: {
      return state
    }
  }
}

export default clients
