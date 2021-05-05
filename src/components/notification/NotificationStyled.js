import styled from 'styled-components';

const NotificationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    padding: 20px;
    border: 1px solid var(--secondary-background);
    border-radius: 5px;
    background-color: var(--accent-color);
    color: var(--secondary-background);
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;

    svg {
        margin-right: 10px;
    }

`;

export default NotificationStyled;
