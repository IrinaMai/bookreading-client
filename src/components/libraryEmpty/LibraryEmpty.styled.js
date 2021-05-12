import styled from 'styled-components'

const LibraryEmptyWrapper = styled.div`
  min-width: 240px;
  min-height: 356px;
  padding-top: 18px;
  padding-bottom: 28px;
  @media (min-width: 480px) {
    min-width: 400px;
    min-height: 234px;
    padding-top: 42px;
    padding-bottom: 35px;
  }
  @media (min-width: 768px) {
    min-width: 510px;
    min-height: 234px;
    padding-top: 12px;
  }

  .iconWrapper {
    display: flex;
  }
  .arrowWrapper {
    display: flex;
    margin-left: 31px;
  }
  .libraryEmptyTitle {
    font-weight: 600;
    font-size: 18px;
    line-height: 2.11;
    margin-bottom: 5px;
  }
  .libraryEmptyText {
    margin-left: 9px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 10px;
  }
  .libraryEmptyIntention {
    margin-left: 9px;
    font-size: 14px;
    line-height: 1.21;
    color: var(--secondary-text);
    margin-bottom: 20px;
  }
  .libraryEmptyGoal {
    margin-left: 9px;
    font-size: 14px;
    line-height: 1.21;
    color: var(--secondary-text);
  }
  .mobileButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    width: 127px;
    height: 40px;
    left: 96px;
    top: 492px;
    outline: none;
    border: none;
    color: var(--secondary-background);
    background: var(--accent-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .mobileButton:hover,
  .mobileButton:focus {
    background: #d15807;
  }

  @media (min-width: 768px) {
    .libraryEmptyTitle {
      font-size: 19px;
      line-height: 2;
      margin-bottom: 10px;
    }
    .libraryEmptytext1 {
      font-size: 16px;
      line-height: 2.38;
      margin-bottom: 0;
    }
    .libraryEmptytext2 {
      line-height: 2.71;
    }
    .mobileButton {
      display: none;
    }
  }
`

export default LibraryEmptyWrapper
