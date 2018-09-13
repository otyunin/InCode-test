import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import './ClientsList.css'
import { getClients } from '../../../redux/actions/clients.action'

class ClientsList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getClients())
  }

  render() {
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

    const { filterClients, loading } = this.props

    // user list items
    const ClientItems = filterClients.map((client, index) => (
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

    const LoadingCircle = (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    )

    return (
      <React.Fragment>
        {loading ? LoadingCircle
          : <List
            items={ClientItems}
            celled
            selection
            verticalAlign="middle"
            className="clients-list"
            style={style.listClients}
            size="large"
          />
        }
      </React.Fragment>
    )
  }
}

ClientsList.propTypes = {
  filterClients: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ClientsList.defaultProps = {
  filterClients: [],
  loading: true,
}

const mapStateToProps = store => ({
  filterClients: store.filterClients,
  loading: store.loading,
})

export default connect(mapStateToProps)(ClientsList)
