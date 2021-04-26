import styled from 'styled-components'

const BackButtonStyled = styled.button`
  margin-bottom: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
      transform: scale(1.2);
    }
  }
`
export default BackButtonStyled
