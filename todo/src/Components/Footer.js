import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
`;
const StyledFooterButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    background: red;
    padding: 5px 2px;
`;


const Footer = () => (
  <StyledFooterContainer>
    <StyledFooterButton>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    </StyledFooterButton>
    {', '}
    <StyledFooterButton>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </StyledFooterButton>
    {', '}
    <StyledFooterButton>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </StyledFooterButton>
  </StyledFooterContainer>
)

export default Footer