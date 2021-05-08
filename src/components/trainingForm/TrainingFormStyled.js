import styled from 'styled-components'

const FormContainer = styled.div`
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    width: 886px;
    margin-bottom: 25px;
  }

  .formTitle {
    width: 100%;
    margin-bottom: 20px;
    padding: 11px 38px;
    height: 60px;
    background-color: #b1b5c2;
    text-align: center;
    color: var(--secondary-background);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 30px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 25px;
    }
  }

  .inputGroup {
    margin-bottom: 20px;
    position: relative;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
    }
  }

  .inputGroup > div {
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .inputGroup > div ~ div {
    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  }

  .inputGroup > div {
    @media (min-width: 768px) {
      margin-right: 45px;
    }
  }

  .inputGroup > div ~ div {
    @media (min-width: 768px) {
      margin-right: 0;
    }
  }

  .selectGroup {
    position: relative;
    @media (min-width: 768px) {
      display: flex;
      align-items: baseline;
    }
  }

  // select styles
  .css-2b097c-container,
  .css-14jk2my-container {
    @media (min-width: 768px) {
      width: 482px;
      height: 42px;
      margin-right: 25px;
    }

    @media (min-width: 1280px) {
      margin-right: 45px;
      width: 670px;
    }
  }

  .formButton {
    min-width: 171px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 58px;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.7;
    background-color: transparent;
    border: 1px solid var(--main-text);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    @media (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      margin-top: 20px;
    }

    &:hover:not([disabled]),
    &:focus:not([disabled]) {
      background: #6d7a8d;
      outline: none;
      color: var(--secondary-background);
      border: 1px solid #6d7a8d;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:disabled {
      border-color: #a6abb9;
    }
  }

  .error {
    position: absolute;
    top: 40px;
    left: 8px;
    color: rgb(225, 22, 22);
    font-size: 11px;
    font-weight: 400;
    @media (min-width: 768px) {
      top: 42px;
      left: 11px;
    }
  }

  .start {
    top: 44px;
    @media (min-width: 768px) {
      top: 45px;
      left: 78px;
    }
    @media (min-width: 1280px) {
      left: 182px;
    }
  }

  .finish {
    top: 106px;
    @media (min-width: 768px) {
      top: 45px;
      left: 372px;
    }
    @media (min-width: 1280px) {
      left: 480px;
    }
  }
`
export default FormContainer
