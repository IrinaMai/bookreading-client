import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: var(--secondary-background);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
    color: var(--main-text);
  }
`;

export default HeaderStyled;
