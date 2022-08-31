import { Container } from './styles'

export const Button = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  )
}