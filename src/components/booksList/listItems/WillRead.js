import React from 'react'
import TrainingIcon from '../../icons/TrainingIcon'
import ListItemStyles from './ListItemStyles'

const WillRead = (
  {
  iconColor,
  _id,
  title,
  author,
  year,
  pages,
}) => {
  return (
    <ListItemStyles>
      <li key={_id} className='list-item'>
        <span className='item-icon'><TrainingIcon className={iconColor}/></span>
        <span className='item-book item'>{title}</span>
        <span className='item-author item'>{author}</span>
        <span className='item-year item'>{year}</span>
        <span className='item-pages item'>{pages}</span>
      </li>
    </ListItemStyles>
  )
}

export default WillRead