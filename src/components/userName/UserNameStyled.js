import styled from 'styled-components';

const UserNameStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .userName-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 2.71px;
    color: var(--main-color);
    @media screen and (min-width: 768px) {
      margin-right: 11px;
    }
  }
  .userName-text {
    display: none;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
    line-height: 2.71;
    color: var(--main-color);
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export default UserNameStyled;
