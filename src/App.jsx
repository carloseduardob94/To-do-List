import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from './styles/App.style'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { TaskDetails } from './components/TaskDetails'

const App = () => {
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
      if(task.id === taskId) return {...task, completed : !task.completed}

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

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return(
    <BrowserRouter>
        <Container>
          <Header />
          <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks tasks={tasks} 
              handleTaskClick={handleTaskClick}
              handleTaskDelete={handleTaskDelete}
              />
            </>
            )}
          />
          <Route path="/:taskTitle"  exact component={TaskDetails} />
        </Container>
    </BrowserRouter>
  )
}

export default App;