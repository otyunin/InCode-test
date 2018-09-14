import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
import { getClientDetail, getClients } from '../../redux/actions/clients.action'
import ClientItem from './ClientItem'
import LoadingCircle from '../LoadingCircle'

class ClientsList extends React.Component {
  state = {
    activeItem: null,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getClients())
  }

  handleClickClient = (client, index) => {
    const { activeItem } = this.state
    const { dispatch } = this.props
    dispatch(getClientDetail(client))
    this.setState({ activeItem: index === activeItem ? null : index })
  }

  render() {
    const { activeItem } = this.state
    const { filterClients, loading } = this.props

    return (
      <React.Fragment>
        {loading ? <LoadingCircle />
          : <List
            selection
            verticalAlign="middle"
            style={{ borderTop: '1px solid rgba(34,36,38,.1)' }}
          >
            {filterClients.map((client, index) => (
              <ClientItem
                key={index}
                active={activeItem === index}
                handleClickItem={() => this.handleClickClient(client, index)}
                client={client}
              />))}
          </List>
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
