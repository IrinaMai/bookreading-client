import styled from 'styled-components';

const UserMenuStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .userMenu-nav {
    display: flex;
  }
  .userMenu-nav::after {
    content: '';
    border-right: 1px solid #e0e5eb;
    margin-right: 14px;
  }
  .userMenu-navlist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .userMenu-navitem {
    margin-right: 7px;
  }
  .userMenu-navlink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover,
    &:active {
      background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    }
  }
  .logout-btn {
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
    line-height: 2.71;
    text-decoration-line: underline;
    text-underline-offset: 1px;
    text-decoration-thickness: 1px;
    color: ${(props) => props.theme.MAIN_TEXT};
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover,
    &:active {
      color: #f25137;
    }
    @media screen and (max-width: 767px) {
      margin-left: 14px;
    }
  }
`;

export default UserMenuStyled;
