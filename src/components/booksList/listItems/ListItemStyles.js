import styled from 'styled-components'

const ListItemStyles = styled.li`
position: relative;
list-style-type: none;
background-color: var(--secondary-background);
padding: 23px 0px 23px 60px;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

:not(:last-child) {
  margin-bottom: 10px;
}

.item {
  display: inline-block;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
}

@media screen and (min-width: 1280px) {
  .item-icon {
    position: absolute;
    left: 20px;
  }

  .item-book {
    width: 566px;
  }

  .item-author {
    width: 347px;
  }

  .item-year {
    width: 127px;
  }
}
`

export default ListItemStyles