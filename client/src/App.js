import React from 'react'
import {Route} from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'
import {Container} from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </Container>
  )
}

export default App
