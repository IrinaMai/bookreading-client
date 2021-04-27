import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: 171px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.37;
  text-align: center;
  color: var(--secondary-background);
  outline: none;
  cursor: pointer;
  background-color: var(--accent-color);
  border: 1px solid var(--accent-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 200px;
    height: 42px;
    font-weight: 600;
    font-size: 16px;
  }

  &:focus,
  &:hover {
    border-color: #d15807;
    background: #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`
export default ButtonStyled
