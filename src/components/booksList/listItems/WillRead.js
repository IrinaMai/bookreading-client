import React from 'react'
import HomeIcon from '../../icons/LibraryIcon'
import ListItemStyles from './ListItemStyles'

const WillRead = ({
  _id,
  title,
  author,
  year,
  pages,
}) => {
  return (
    <ListItemStyles>
      <li key={_id} className='list-item'>
        <span className='item-icon'><HomeIcon/></span>
        <span className='item-book item'>{title}</span>
        <span className='item-author item'>{author}</span>
        <span className='item-year item'>{year}</span>
        <span className='item-pages item'>{pages}</span>
      </li>
    </ListItemStyles>
  )
}

export default WillRead