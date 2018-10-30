import styled, { css } from "styled-components";

const StyledMessage = styled.span`
  font-weight: 400;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme.primary};

  ${props => props.secondary && css` color: ${props => props.theme.secondary};`};
  ${props => props.tertiary && css` color: ${props => props.theme.tertiary};`};
  ${props => props.quarternary && css` color: ${props => props.theme.quarternary};`};
  ${props => props.success && css` color: ${props => props.theme.success};`};
  ${props => props.warn && css` color: ${props => props.theme.warn};`};
  ${props => props.error && css` color: ${props => props.theme.error};`};
  ${props => props.white && css` color: #fff;`};
  ${props => props.disabled && css` color: ${props => props.theme.disabled};`};

  ${props => props.tiny && css` font-size: 0.8rem; `};
  ${props => props.withIconRight && css` margin-left: 5px; `};
  ${props => props.italic && css` font-style: italic; `};
  ${props => props.bold && css` font-weight: bold; `};
  ${props => props.thin && css` font-weight: 300; `};
`;

export default StyledMessage;