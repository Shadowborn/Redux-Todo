import React from 'react'
import Footer from './Components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    max-width: 40%;
    padding: 12px 20px;
    display: flex;
    box-sizing: border-box;
    background-color: blue;
    margin: 0 auto;
`;

const App = () => (
  <StyledAppContainer>
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  </StyledAppContainer>
)

export default App
