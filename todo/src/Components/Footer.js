import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
    width: 100%;
    padding: 12px 20px;
    display: flex;
    box-sizing: border-box;
    background-color: blue;
`;


const Footer = () => (
  <StyledFooterContainer>
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
  </StyledFooterContainer>
)

export default Footer