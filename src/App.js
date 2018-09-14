import React from 'react'
import { Grid } from 'semantic-ui-react'
import ClientDetail from './components/ClientDetail/ClientDetail'
import SearchBar from './components/LeftBar/SearchBar'
import ClientsList from './components/LeftBar/ClientsList'
import './App.css'

const App = () => {
  const style = {
    grid: {
      height: '100vh',
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
      <Grid.Column style={style.leftColumn} width={4}>
        <Grid.Row>
          <SearchBar />
        </Grid.Row>
        <Grid.Row style={style.clientList} className="clients-list">
          <ClientsList />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={12}>
        <ClientDetail />
      </Grid.Column>
    </Grid>
  )
}

export default App
