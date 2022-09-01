import { Container } from './styles'
import { useHistory } from 'react-router-dom'

export const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  const history = useHistory()

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return(
    <Container style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="see-task-details-button" onClick={handleTaskDetailsClick}>ℹ️</button>
        <button 
        className="remove-task-button" 
        onClick={() => handleTaskDelete(task.id)}
        >✖️
        </button>
      </div>
    </Container>
  )
}