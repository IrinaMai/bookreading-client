import styled from 'styled-components'

const BooksWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.DECOR_COLOR};
  border-bottom: 1px solid ${(props) => props.theme.DECOR_COLOR};
  max-width: 886px;
  margin-bottom: 40px;

  .labelContainer {
    border-bottom: 1px solid ${(props) => props.theme.DECOR_COLOR};
    padding-top: 5px;
  }
  .bookLabel {
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    color: ${(props) => props.theme.SECONDARY_TEXT};
  }

  .labelContainer .bookLabel:nth-of-type(1) {
    margin-right: 170px;
    @media (min-width: 1280px) {
      margin-right: 270px;
    }
  }

  .labelContainer .bookLabel:nth-of-type(2) {
    margin-right: 145px;
    @media (min-width: 1280px) {
      margin-right: 180px;
    }
  }

  .labelContainer .bookLabel:nth-of-type(3) {
    margin-right: 55px;
    @media (min-width: 1280px) {
      margin-right: 73px;
    }
  }
`
export default BooksWrapper
