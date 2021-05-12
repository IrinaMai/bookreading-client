import styled from 'styled-components'

const TimerStyled = styled.div`
  .timerContaienr {
    display: flex;
    justify-content: space-evenly;
    padding-left: 35px;
    padding-right: 35px;
    width: 100%;
    height: 60px;
    margin: auto;
    background: ${(props) => props.theme.SECONDARY_BACKGROUND};
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  }
  .timer {
    display: flex;
    justify-content: center;
  }
  .partContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .words {
    display: flex;
    justify-content: space-between;
    width: 58%;
    margin: auto;
  }

  .title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    /* identical to box height, or 271% */
    text-align: center;
    color: #898f9f;
  }

  .dots {
    margin-top: 5px;
    font-size: 25px;
    justify-content: center;
  }

  .number {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 1.5;
  }

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 3.8;
    /* identical to box height, or 380% */
    margin-top: -15px;

    color: var(--secondary-text);
  }

  @media (min-width: 768px) {
    /* display: flex; */
    .timerContaienr {
      width: 290px;
    }
  }
`
export default TimerStyled
