import { Container } from './styles'

export const Task = ({ task, handleTaskClick }) => {
  return(
    <Container style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
      {task.title}
      </div>
    </Container>
  )
}