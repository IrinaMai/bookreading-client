import styled from 'styled-components';

const LogoutModalStyled = styled.div`
  .logout-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    text-align: center;
    color: var(--main-text);
  }
  .logout-btn-container{
      display: flex;
      width: max-content;
      margin: 0 auto;
  }
  .logout-cancel {
    display: block;    
    margin-right: 20px;
    padding: 10px 20px;
    border: 1px solid #242A37;
    background: var(--secondary-background);    
  }
  .logout-confirm {
    display: block;    
    padding: 10px 20px;
    background: var(--accent-color);
    border: 1px solid var(--accent-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  `;

export default LogoutModalStyled;
