import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import styled from 'styled-components';

const StyledAddTodoButton = styled.button`
    padding: 10px;
    width: 100%;
    border: none;
    background-color: red;
    color: white;
    font-size: 16px;
`;
const StyledAddTodoForm = styled.form`
    width: 100%;
`;
const StyledAddTodoInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
`;

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <StyledAddTodoForm
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <StyledAddTodoInput
          ref={node => {
            input = node
          }}
        />
        <StyledAddTodoButton type="submit">Add Todo</StyledAddTodoButton>
      </StyledAddTodoForm>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo