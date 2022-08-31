import { Container } from './styles'
import { Task } from '../Task'

export const Tasks = ({ tasks }) => {
  return (
    <Container>
      {tasks.map(task => (<Task task={task}/>))}
    </Container>
  )
}
