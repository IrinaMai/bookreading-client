import styled from 'styled-components'

const BooksListStyled = styled.div`
.read-title {
  margin-bottom: 20px;
}

.willRead-list {
  margin-bottom: 40px;
}

@media screen and (max-width: 767px) {
  .read-title {
    max-width: 270px;
    margin-left: auto;
    margin-right: auto;
  }
}
`

export default BooksListStyled