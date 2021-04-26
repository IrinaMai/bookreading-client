import styled from 'styled-components'

const ChartStyled = styled.div`
  background-color: var(--secondary-background);
  width: 270px;
  height: 290px;
  padding: 14px 22px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
  }

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
  ul.recharts-default-legend {
    /* width: max-content; */
    display: flex;
    flex-direction: column;
    /* text-align: left; */
  }
  @media screen and (min-width: 768px) {
    width: 678px;
    height: 340px;
    padding: 25px 35px;
  }
  @media screen and (min-width: 1280px) {
    width: 886px;
    padding: 30px 40px;
  }
`

export default ChartStyled
