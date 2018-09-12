import React from 'react'
import ClientsListItem from './ClientsListItem/ClientsListItem'
import './ClientsList.css'
import clients from '../../../clients.json'

const ClientsList = () => (
  <div className="clients-list">
    {clients.map((client, key) => <ClientsListItem key={key} client={client} />)}
  </div>
)

export default ClientsList
