import React from 'react'
import { List, Image } from 'semantic-ui-react'
import './ClientsList.css'
import clients from '../../../clients.json'

const ClientsList = () => {
  const style = {
    listClients: {
      margin: '0 -2px 0 0',
    },
    listItem: {
      padding: '9px 15px',
    },
    listItemAvatar: {
      width: '48px',
      height: '48px',
      marginRight: '8px',
    },
  }
  // user list items
  const ClientItems = clients.map((client, index) => (
    <List.Item key={index} style={style.listItem}>
      <Image avatar style={style.listItemAvatar} src={client.general.avatar} />
      <List.Content>
        <List.Header>{`${client.general.firstName} ${client.general.lastName}`}</List.Header>
        <List.Description>
          {client.job.title}
        </List.Description>
      </List.Content>
    </List.Item>
  ))

  return (
    <List
      items={ClientItems}
      celled
      selection
      verticalAlign="middle"
      className="clients-list"
      style={style.listClients}
      size="large"
    />
  )
}

export default ClientsList
