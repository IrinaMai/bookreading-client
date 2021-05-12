import styled from 'styled-components'

const LogoutModalStyled = styled.div`
  position: relative;
  min-width: 230px;
  min-height: 203px;
  /* padding-top: 32px; */
  padding: 32px 10px 0;
  @media (min-width: 768px) {
    min-width: 350px;
    min-height: 176px;
    /* padding-bottom: 35px; */
    padding: 32px 35px 35px;
  }
  .logout-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    text-align: center;
    color: ${(props) => props.theme.MAIN_TEXT};
  }
  .logout-btn-container {
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
  }
  .logout-cancel {
    display: block;
    width: 98px;
    height: 40px;
    margin-right: 20px;
    padding: 10px 20px;
    border: 1px solid #242a37;
    background: var(--secondary-background);
    cursor: pointer;
  }
  .logout-cancel:hover,
  .logout-cancel :focus {
    background: var(--light-text);
    outline: none;
    color: var(--secondary-background);
    border: 1px solid #a6abb9;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logout-confirm {
    display: block;
    width: 97px;
    height: 40px;
    padding: 10px 20px;
    background: var(--accent-color);
    color: var(--secondary-background);
    border: 1px solid var(--accent-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .logout-confirm:hover,
  .logout-confirm:focus {
    background: #d15807;
    outline: none;
    border: 1px solid #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    /* transition: background-color 200ms ease-in-out;
    transition: all 250ms ease-in; */
    transition: all 500ms cubic-bezier(1, 1, 1, 1);
  }
  @media (min-width: 768px) {
    .logout-text {
      min-width: 290px;
    }
    .logout-cancel,
    .logout-confirm {
      min-width: 130px;
    }
  }
  @media (min-width: 1280px) {
    .logout-text {
      width: 290px;
    }
  }
`

export default LogoutModalStyled
