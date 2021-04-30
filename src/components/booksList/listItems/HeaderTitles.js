import React from 'react';
import ListItemStyles from './ListItemStyles'

const HeaderTitles = () => {
  return (
    <ListItemStyles>
      <div className='list-header'>
        <span className='header-name header-item'>Назва книги</span>
        <span className='header-author header-item'>Автор</span>
        <span className='header-year header-item'>Рік</span>
        <span className='header-pages header-item'>Стор.</span>
      </div>
    </ListItemStyles>
  )
}

export default HeaderTitles