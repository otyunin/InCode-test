import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import './SearchInput.css'

class SearchInput extends React.Component {
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
    return (
      <div className="search">
        <Input icon placeholder="Search..." fluid className="search-input">
          <input onClick={this.handleFocus} onChange={this.handleChange} value={search} />
          {!search ? <Icon name="search" /> : <Icon link name="delete" onClick={this.handleDelete} />}
        </Input>
      </div>
    )
  }
}

export default SearchInput
