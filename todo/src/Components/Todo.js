import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';

const StyledToDoLi = styled.div`
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    background: red;
    margin-top: 5px;
    width:100%;
    color: white;
    font-size: 18px;
    min-width: 100%;
    display: flex;
`;

const Todo = ({ onClick, completed, text }) => (
  <StyledToDoLi
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </StyledToDoLi>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo