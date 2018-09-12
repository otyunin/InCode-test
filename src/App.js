import React from 'react'
import { Grid } from 'semantic-ui-react'
import LeftBar from './components/LeftBar'
import './App.css'

const App = () => (
  <Grid style={{ height: '100vh', margin: 0 }}>
    <Grid.Column width={4} className="left-bar" style={{ padding: 0 }}>
      <LeftBar />
    </Grid.Column>
    <Grid.Column stretched width={12}>

    </Grid.Column>
  </Grid>
)

export default App
