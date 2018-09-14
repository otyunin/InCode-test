import { xhRequest } from '../../api/clients'

const GET_CLIENTS = 'GET_CLIENTS'
export const GET_CLIENT_DETAIL = 'GET_CLIENT_DETAIL'
export const GET_CLIENTS_PENDING = 'GET_CLIENTS_PENDING'
export const GET_CLIENTS_FULFILLED = 'GET_CLIENTS_FULFILLED'
export const GET_CLIENTS_REJECTED = 'GET_CLIENTS_REJECTED'
export const SEARCH = 'SEARCH'

export const getClients = () => async dispatch => {
  await dispatch({
    type: GET_CLIENTS,
    payload: xhRequest('clients.json')
      .then(res => res),
  })
}

export const getClientDetail = client => ({
  type: GET_CLIENT_DETAIL,
  payload: client,
})

export const search = value => ({
  type: SEARCH,
  payload: value.toLowerCase(),
})
