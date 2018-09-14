import React from 'react'
import { Grid } from 'semantic-ui-react'
import ClientDetail from './components/ClientDetail/ClientDetail'
import SearchBar from './components/SearchBar'
import ClientsList from './components/ClientsList'
import './App.css'

const App = () => {
  const style = {
    grid: {
      margin: 0,
    },
    leftColumn: {
      padding: 0,
      borderRight: '2px solid rgba(34,36,38,.15)',
    },
    p0: {
      padding: 0,
    },
    clientList: {
      margin: '0 -2px 0 0',
    },
  }
  return (
    <Grid style={style.grid}>
      <Grid.Column style={style.leftColumn} only="computer tablet" computer={4} tablet={8}>
        <Grid.Row>
          <SearchBar />
        </Grid.Row>
        <Grid.Row style={style.clientList} className="clients-list">
          <ClientsList />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column style={style.leftColumn} only="mobile" mobile={16}>
        <Grid.Row>
          <SearchBar />
        </Grid.Row>
        <Grid.Row className="clients-list-mobile">
          <ClientsList />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={10}>
        <ClientDetail />
      </Grid.Column>
    </Grid>
  )
}

export default App
