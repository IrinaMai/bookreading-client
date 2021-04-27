import styled from 'styled-components'

const ResumeWrapper = styled.div`
  min-width: 240px;
  min-height: 306px;
  padding: 2px 15px 20px;
  @media (min-width: 768px) {
    min-width: 540px;
    min-height: 220px;
    padding-bottom: 33px;
  }
  .resumeText {
    font-weight: 500;
    font-size: 16px;
    line-height: 2.375;
    margin-bottom: 5px;
  }
  .resumeContent {
    font-weight: 500;
    font-size: 16px;
    line-height: 2.375;
    margin-top: 10px;
  }
  .resumeTextArea {
    width: 100%;
    height: 170px;
    border: 1px solid #a6abb9;
    resize: none;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 2.71;
    cursor: text;
  }
  .buttonWrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .buttonBack {
    min-width: 98px;
    min-height: 40px;
    border: 1px solid #242a37;
    background-color: var(--secondary-background);
    cursor: pointer;
  }
  .buttonBack:hover,
  .buttonBack:focus {
    background: var(--light-text);
    outline: none;
    color: var(--secondary-background);
    border: 1px solid #a6abb9;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    /* transition: background-color 200ms ease-in-out;
    transition: all 250ms ease-in; */
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .buttonSave {
    min-width: 97px;
    min-height: 40px;
    background: var(--accent-color);
    color: var(--secondary-background);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
  }
  .buttonSave:hover,
  .buttonSave:focus {
    background: #d15807;
    outline: none;
    border: 1px solid #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    /* transition: background-color 200ms ease-in-out;
    transition: all 250ms ease-in; */
    transition: all 500ms cubic-bezier(1, 1, 1, 1);
  }
  @media (min-width: 768px) {
    .buttonWrapper {
      justify-content: center;
    }
    .buttonBack {
      min-width: 130px;
      margin-right: 30px;
    }
    .buttonSave {
      min-width: 130px;
    }
  }
`

export default ResumeWrapper
