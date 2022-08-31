import { Container } from './styles'
import { Button } from '../Button'

export const AddTask = () => {
  return (
    <Container>
      <input type="text" />
      <div>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}