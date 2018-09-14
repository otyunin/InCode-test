import React from 'react'
import PropTypes from 'prop-types'
import { List, Image } from 'semantic-ui-react'

const ClientItem = ({ client, active, handleClickItem }) => {
  const style = {
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '9px 15px',
      borderBottom: '1px solid rgba(34,36,38,.1)',
      borderRadius: 0,
      background: active && 'rgba(0,0,0,.1)',
    },

    listItemAvatar: {
      width: '48px',
      height: '48px',
      marginRight: '8px',
    },
  }

  return (
    <List.Item style={style.listItem} onClick={handleClickItem}>
      <Image avatar style={style.listItemAvatar} src={client.general.avatar} />
      <List.Content>
        <List.Header>{`${client.general.firstName} ${client.general.lastName}`}</List.Header>
        <List.Description>
          {client.job.title}
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

ClientItem.propTypes = {
  client: PropTypes.object,
  active: PropTypes.bool,
  handleClickItem: PropTypes.func,
}

ClientItem.defaultProps = {
  client: null,
  active: null,
  handleClickItem: null,
}

export default ClientItem
