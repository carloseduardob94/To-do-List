import styled from 'styled-components'

export const Container = styled.div`
  > .task-details-container {
    background-color: #444;
    margin: 15px 0;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    color: #eee;
    border-radius: 5px;
  }

  > .task-details-container h2 {
    background-color: #444;
    margin-bottom: 5px;
    color: chartreuse;
  }

  > .task-details-container p {
    background-color: #444;
  }

  > .back-button-container {
    width: 30%;
    margin-top: 10px;
  }
`
