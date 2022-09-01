import React, { useState } from 'react';
import { Container } from './styles/App.style'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import { v4 as uuid } from 'uuid'

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task

    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuid(),
      completed: false
    }]

    setTasks(newTask)
  }
  return(
      <Container>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </Container>
  )
}

export default App;