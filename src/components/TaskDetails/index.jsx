import { Container } from './styles'
import { Button } from '../Button'
import { useParams } from 'react-router-dom'

export const TaskDetails = () => {
  const params = useParams()

  return(
    <Container>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquam dicta numquam, nam molestiae fugit delectus porro dolorum, ducimus eligendi vero et recusandae. Dicta commodi nostrum odio, labore ducimus iste.</p>
      </div>
    </Container>
  )
}