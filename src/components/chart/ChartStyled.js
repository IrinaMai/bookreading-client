import styled from 'styled-components';

const ChartStyled = styled.div`
  background-color: var(--secondary-background);
  width: 290px;
  .pagesAverage {
    font-weight: 500;
    font-size: 12px;
    line-height: 3.17;
    text-transform: uppercase;
    color: var(--main-text);
  }
  .pagesAverage-amount {
    width: 25px;
    height: 25px;
    padding: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 3.17;
    text-align: center;
    text-transform: uppercase;
    color: var(--main-text);
    background: #f5f7fa;
  }
  @media screen and (min-width: 768px) {
    width: 678px;
  }
  @media screen and (min-width: 768px) {
    width: 886px;
  }
`;

export default ChartStyled;
