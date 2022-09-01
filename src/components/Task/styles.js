import styled from 'styled-components'

export const Container = styled.div`
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  color: #eee;
  align-items: center;

  > .task-title {
    cursor: pointer;
    background: none;
  }

  > .buttons-container {
    background-color: #444;
  }

  > div button.remove-task-button {
    background-color: #444;
    border: none;
    font-size: 16px;
    color: chartreuse;
    cursor: pointer;
  }

  > div .see-task-details-button {
    background-color: #444;
    border: none;
    font-size: 16px;
    color: chartreuse;
    padding-right: 10px;
    cursor: pointer;
  }
`
