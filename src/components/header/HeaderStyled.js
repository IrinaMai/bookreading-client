import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: var(--secondary-background);
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
    color: var(--main-color);
  }
`;

export default HeaderStyled;
