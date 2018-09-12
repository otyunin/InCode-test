import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'
import './ClientsListItem.css'

const ClientsListItem = ({ client }) => (
  <div className="client-in-list">
    <Image src={client.general.avatar} avatar style={{ width: 48, height: 48, marginRight: '15px' }} />
    <div className="client-info">
      <span><b>{`${client.general.firstName} ${client.general.lastName}`}</b></span>
      <br />
      <span>{client.job.title}</span>
    </div>
  </div>
)

ClientsListItem.propTypes = {
  client: PropTypes.object,
}

ClientsListItem.defaultProps = {
  client: {},
}

export default ClientsListItem
