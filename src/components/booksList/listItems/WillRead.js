import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import TrainingIcon from '../../icons/TrainingIcon'
import HeaderTitles from './HeaderTitles'
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
  const onlyWidth = useWindowWidth()
  return (
    <ListItemStyles>
      <li key={_id} className='list-item'>
        <span className='item-icon'><TrainingIcon className={iconColor}/></span>
        <span className='item-book item'>{title}</span>
        {onlyWidth < 768 && <HeaderTitles />}
        <div className='description-container'>
          <span className='item-author item'>{author}</span>
          <span className='item-year item'>{year}</span>
          <span className='item-pages item'>{pages}</span>
        </div>
      </li>
    </ListItemStyles>
  )
}

export default WillRead