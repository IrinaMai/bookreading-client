import styled from 'styled-components'

const StatisticsStyled = styled.div`
  .statisticTitle {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 12px;
    line-height: 2.17;
    text-transform: uppercase;
    color: var(--main-text);

    @media (max-width: 767px) {
      text-align: center;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 10px;
      }
      &:before {
        margin-left: -100%;
      }
      &:after {
        margin-right: -100%;
      }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 31%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 8px;
      }
      &:after {
        margin-right: -100%;
      }
    }

    @media (min-width: 1279px) {
      text-align: center;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        height: 1px;
        background: #e0e5eb;
        border: solid var(--secondary-background);
        border-width: 0 10px;
      }
      &:before {
        margin-left: -100%;
      }
      &:after {
        margin-right: -100%;
      }
    }
  }

  .statisticList {
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 240px;
    }
  }
  .statisticItem {
    list-style: none;
    display: flex;
    justify-content: space-around;
    @media (min-width: 768px) and (max-width: 1279px) {
      justify-content: space-between;
    }
  }

  .date,
  .pagesCount,
  .pagesText {
    font-size: 14px;
    line-height: 1.71;
    text-align: right;
    color: var(--main-text);
  }
  .pagesText {
    color: var(--secondary-text);
  }
`
export default StatisticsStyled
