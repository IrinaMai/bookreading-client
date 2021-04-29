import styled from 'styled-components'

const ToGoalStyled = styled.div`
  display: block;
  justify-content: center;
  order: 2;
  background: var(--secondary-background);
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin-bottom: 30px;
  @media (min-width: 1279px) {
    margin-bottom: 0;
    margin-top: 40px;
  }
  .containerMore {
    height: 215px;
  }

  .bookTitle,
  .bookTitleMore {
    height: 60px;
  
    background: #b1b5c2;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    color: #fff;
    padding-top: 15px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .booksCounterContainer,
  .booksCounterContainerMore {
    width: 100%;
    padding: 55px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .booksCounterContainerMore {
    padding: 30px 25px 30px 25px;
  }
  .counterNumber {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 1.18;
    padding: 25%;
  }
  .counterNumberMore,
  .counterNumberActive {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 1.1;
    text-align: center;
    padding: 17%;
  }
  .counterNumberActive {
    color: var(--accent-color);
  }
  .booksCounter,
  .booksCounterMore {
    width: 100px;
    height: 100px;
    background: var(--main-background);
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    text-align: center;
  }

  .booksCounterMore {
    width: 63px;
    height: 63px;
  }
  .counterLabelContainer,
  .counterLabelContainerMore {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 14px;
  }
  .counterLabel {
    width: 66px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0.82;
    text-align: center;

    color: var(--secondary-text);
  }
  .counterLabelMore {
    width: 73px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 0.82;
    text-align: center;
    color: var(--secondary-text);
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 125px;
    margin: 0 0 40px 0;
    padding: 23px 30px 42px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    .bookTitle {
      width: 270px;
    }
    .bookTitleMore {
      width: 68%;
    }

    .booksCounterContainer,
    .booksCounterContainerMore {
      padding: 0;
      width: auto;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 24px;
    }

    .booksCounterContainerMore {
      padding-top: 25px;
      margin-left: 20px;
    }
    .booksCounter,
    .booksCounterMore {
      height: 60px;
    }
    .booksCounterMore {
      width: 100px;
    }
    .counterNumber {
      padding: 0;
      height: 100%;
    }
    .counterNumberMore,
    .counterNumberActive {
      padding: 10%;
    }
    .counterLabelContainer {
      margin-top: 7px;
      justify-content: space-evenly;
    }
    .counterLabelContainerMore {
      margin-top: 5px;
    }
    .counterLabel {
      width: 100px;
      font-size: 11px;
    }
  }
  @media (min-width: 1280px) {
    width: 275px;
    height: 318px;
    padding: 0;
    flex-wrap: wrap;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    .booksCounter {
      height: 100px;
      margin-bottom: 15px;
    }
    .booksCounterMore {
      height: 66px;
      width: 66px;
    }
    .bookTitle,
    .bookTitleMore {
      margin-bottom: auto;
      width: 100%;
    }
    .booksCounterContainer,
    .booksCounterContainerMore {
      padding: 0 0 0 0;
      margin-bottom: 80px;
      margin-top: 50px;
    }
    .booksCounterContainerMore {
      margin-left: 0px;
    }
    .counterNumber,
    .counterNumberMore,
    .counterNumberActive {
      padding: 23%;
    }
    .counterLabel {
      width: 66px;
      font-size: 14px;
      line-height: 0.9;
    }
    .counterLabelContainer {
      margin: 0;
    }
    .counterLabelContainerMore {
      margin-top: 15px;
    }
  }
`
export default ToGoalStyled
