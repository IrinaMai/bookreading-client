import styled from 'styled-components'

const ResultsWrapper = styled.div`
  min-width: 240px;
  padding: 10px 17px;

  background-color: var(--secondary-background);

  .resultsTitle {
    font-weight: 600;
    font-size: 12px;
    line-height: 3.17;
    text-align: center;
    text-transform: uppercase;
  }

  .formGroup {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .inputGroup {
    width: 110px;
    height: 72px;
  }

  .inputGroup:not(:last-child) {
    margin-right: 20px;
  }

  .formInputDate,
  .pagesInput {
    width: 100%;
    height: 42px;
    padding: 5px 13px;
    border: 1px solid #a6abb9;
    background-color: var(--main-background);
    outline: none;
  }

  .label {
    font-weight: 500;
    font-size: 11px;
    line-height: 2.45;
    color: var(--secondary-text);
  }

  .formButton {
    width: 171px;
    height: 42px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: var(--secondary-background);
    outline: none;
    cursor: pointer;
    background-color: var(--accent-color);
    border: 1px solid var(--accent-color);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      border-color: #d15807;
      background: #d15807;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
`
export default ResultsWrapper
