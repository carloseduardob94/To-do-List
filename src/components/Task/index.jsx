import { Container } from './styles'

export const Task = ({task}) => {
  return(
    <Container>
      {task.title}
    </Container>
  )
}