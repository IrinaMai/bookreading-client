import styled from 'styled-components'

const AddButtonStyled = styled.button`
  position: fixed;
  right: 50%;
  bottom: 30px;
  transform: translate(50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    background: transparent;
    border-color: var(--main-text);
  }

  &:hover svg,
  &:hover svg {
    fill: var(--main-text);
  } 

  svg {
    fill: var(--secondary-background);
    display: flex;
    align-items: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      fill: var(--main-text);
    }
  }
`
export default AddButtonStyled
