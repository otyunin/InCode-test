import React from 'react'
import { Grid } from 'semantic-ui-react'
import LeftBar from './components/LeftBar'

const App = () => {
  const style = {
    grid: {
      height: '100vh',
      margin: 0,
    },
    leftColumn: {
      padding: 0,
      borderRight: '2px solid rgba(34, 36, 38, .15)',
    },
  }
  return (
    <Grid style={style.grid}>
      <Grid.Column width={4} style={style.leftColumn}>
        <LeftBar />
      </Grid.Column>
      <Grid.Column stretched width={12}>

      </Grid.Column>
    </Grid>
  )
}

export default App
