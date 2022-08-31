import React, { useState } from 'react';
import { Container } from './styles/App.style'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'


const App = () => {
  // let message = 'Hello world!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }
  ])
  return(
      <Container>
        <AddTask />
        <Tasks tasks={tasks} />
      </Container>
  )
}

export default App;