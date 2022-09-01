import { Container } from './styles'
import { Task } from '../Task'

export const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <Container>
      {tasks.map(task => (<Task task={task} handleTaskClick={handleTaskClick}/>))}
    </Container>
  )
}
