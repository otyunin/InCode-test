import React, { Fragment } from 'react'
import SearchBar from './SearchBar'
import ClientsList from './ClientsList'

const LeftBar = () => (
  <Fragment>
    <SearchBar />
    <ClientsList />
  </Fragment>
)

export default LeftBar
