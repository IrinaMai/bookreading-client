import styled from 'styled-components'

const FinishModalStyled = styled.div`
  text-align: center;
  padding: 30px 0;
  @media (min-width: 768px) {
    min-width: 360px;
    min-height: 260px;
  }
  svg {
    margin-bottom: 20px;
  }

  .finishText {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    text-align: center;
    color: ${(props) => props.theme.MAIN_TEXT};
    margin-bottom: 20px;
  }
  .finishButton {
    width: 210px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.37;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    color: var(--secondary-background);
    background: var(--accent-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 500ms cubic-bezier(1, 1, 1, 1);

    &:hover,
    &:focus {
      background: #d15807;
      outline: none;
      border: 1px solid #d15807;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
`
export default FinishModalStyled
