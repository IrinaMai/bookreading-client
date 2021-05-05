import styled from 'styled-components';

const NotificationStyled = styled.div`
    position: relative;

    .notification {
        display: flex;
        /* justify-content: center; */
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
    }

    .notification-text {
        margin: 0 auto;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;   
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in-out;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit-active {
        opacity: 0;
        transition: opacity 200ms ease-in-out;
}

    svg {
        margin-right: 10px;
    }

`;

export default NotificationStyled;
