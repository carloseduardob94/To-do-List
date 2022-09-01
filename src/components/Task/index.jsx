import { Container } from './styles'

export const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  return(
    <Container style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="see-task-details-button">ℹ️</button>
        <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>✖️</button>
      </div>
    </Container>
  )
}