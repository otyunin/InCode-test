import { xhRequest } from '../../api/clients'

export const GET_CLIENTS = 'GET_CLIENTS'
export const GET_CLIENTS_PENDING = 'GET_CLIENTS_PENDING'
export const GET_CLIENTS_FULFILLED = 'GET_CLIENTS_FULFILLED'
export const GET_CLIENTS_REJECTED = 'GET_CLIENTS_REJECTED'

export const getClients = () => async dispatch => {
  await dispatch({
    type: GET_CLIENTS,
    payload: xhRequest('clients.json')
      .then(res => res),
  })
}
