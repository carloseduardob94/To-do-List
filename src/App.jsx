import React from 'react';
import { Container } from './styles/App.style'

const App = () => {
  const message = 'Hello world!'
  return(
    <Container>
      {message}
    </Container>
  )
}

export default App;