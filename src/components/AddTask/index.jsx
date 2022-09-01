import { Container } from './styles'
import { Button } from '../Button'
import { useState } from 'react'

export const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <Container>
      <input type="text"
      onChange={handleInputChange} 
      value={inputData}
      />
      <div>
        <Button onClick={handleAddTaskClick} >Adicionar</Button>
      </div>
    </Container>
  )
}