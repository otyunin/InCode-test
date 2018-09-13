import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Icon, Input } from 'semantic-ui-react'
import { search } from '../../redux/actions/clients.action'

class SearchBar extends React.Component {
  state = {
    searchValue: '',
  }

  componentDidUpdate() {
    const { dispatch } = this.props
    const { searchValue } = this.state
    dispatch(search(searchValue))
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  handleDelete = () => {
    this.setState({ searchValue: '' })
  }

  render() {
    const { searchValue } = this.state

    const style = {
      searchInput: {
        padding: '15px',
      },
      searchIcon: {
        right: '15px',
        border: 0,
      },
    }
    return (
      <div className="search">
        <Input icon placeholder="Search..." fluid style={style.searchInput}>
          <input onClick={this.handleFocus} onChange={this.handleChange} value={searchValue} />
          <Icon
            link={!!searchValue}
            name={searchValue ? 'delete' : 'search'}
            onClick={this.handleDelete}
            style={style.searchIcon}
          />
        </Input>
      </div>
    )
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(SearchBar)
