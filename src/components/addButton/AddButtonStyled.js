import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  position: fixed;
  right: 50%;
  bottom: 30px;
  transform: translate(50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-color: #d15807;
    background: #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  svg {
    fill: var(--secondary-background);
    display: flex;
    align-items: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export default LinkStyled
