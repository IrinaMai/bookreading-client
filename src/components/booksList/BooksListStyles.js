import styled from 'styled-components'

const BooksListStyled = styled.div`
.read-title {
  margin-bottom: 25px;
}

.list-header {
  display: flex;
  list-style-type: none;
  margin-bottom: 14px;
}

.header-item {
  color: var(--secondary-text);
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
}

@media screen and (min-width: 1280px) {
  .header-name {
    width: 625px;
  }

  .header-author {
    width: 360px;
  }

  .header-year {
    width: 96px;
  }
}
`

export default BooksListStyled