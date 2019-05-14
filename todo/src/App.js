import React from 'react'
import Footer from './Components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import styled from 'styled-components';

const StyledAppContainer = styled.div`
    max-width: 40%;
    min-height: 400px;
    padding: 12px 20px;
    display: flex;
    box-sizing: border-box;
    background-color: #000000e6;
    margin: 0 auto;
    justify-content: center;
`;
const StyledAppH1 = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    padding: 54px;
    box-sizing: border-box;
    font-size: 40px;
`;
const StyledAppDiv = styled.div`
    width: 100%;
    padding: 0px;
`;


const App = () => (
  <StyledAppContainer>
  <StyledAppDiv>
    <StyledAppH1>To Do List</StyledAppH1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </StyledAppDiv>
  </StyledAppContainer>
)

export default App
