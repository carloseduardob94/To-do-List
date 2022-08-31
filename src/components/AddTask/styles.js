import styled from 'styled-components'

export const Container = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;

  > input {
    background-color: #fff;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    flex: 2;
    background-color: #444;
    color: #eee;
    font-size: 16px;
  }

  > div {
    margin-left: 10px;
    flex: 1;
  }
`
