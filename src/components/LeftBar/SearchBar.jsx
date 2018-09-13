import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state = {
    search: '',
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  handleDelete = () => {
    this.setState({ search: '' })
  }

  render() {
    const { search } = this.state

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
          <input onClick={this.handleFocus} onChange={this.handleChange} value={search} />
          <Icon
            link={!!search}
            name={search ? 'delete' : 'search'}
            onClick={this.handleDelete}
            style={style.searchIcon}
          />
        </Input>
      </div>
    )
  }
}

export default SearchBar
