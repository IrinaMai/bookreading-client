import styled from 'styled-components'

const ListItemStyles = styled.li`
list-style-type: none;
:not(:last-child) {
  margin-bottom: 10px;
}

.list-item {
  position: relative;
  background-color: var(--secondary-background);
  padding: 23px 0px 23px 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
}

.item {
  display: inline-block;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
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

.orangeIcon {
  fill: var(--accent-color);
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