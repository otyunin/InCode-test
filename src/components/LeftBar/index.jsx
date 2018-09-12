import React, { Fragment } from 'react'
import SearchInput from './SearchInput'
import ClientsList from './ClientsList'

const LeftBar = () => (
  <Fragment>
    <SearchInput />
    <ClientsList />
  </Fragment>
)

export default LeftBar
