import styled from 'styled-components';

const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1000;
  .container.header-container {
    margin: 0 auto;
    height: 60px;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    font-family: Abril Fatface;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.35;
    color: ${(props) => props.theme.MAIN_TEXT};
    ${props =>
      !props.isAuth &&
      `
    @media screen and (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
    `}
  }
  .headerThemeBtnContainer{
    height: 37px;
    position: relative;
  }
  @media (min-width: 768px){
    .header-logo {
      width: 135px;
    }
  }
`;

export default HeaderStyled;
