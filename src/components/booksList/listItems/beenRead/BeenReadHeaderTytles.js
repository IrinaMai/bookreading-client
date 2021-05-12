import React from 'react'
import BeenReadStyles from './BeenReadStyles'

const BeenReadHeaderTytles = () => {
  return (
    <ul>
    <BeenReadStyles>
        <div className='list-header'>
          <span className='header-name header-item'>Назва книги<span className='dots'>:</span></span>
          <span className='header-author header-item'>Автор<span className='dots'>:</span></span>
          <span className='header-year header-item'>Рік<span className='dots'>:</span></span>
          <span className='header-pages header-item'>Стор.<span className='dots'>:</span></span>
          <span className='header-rating header-item'>Рейтинг<span className='ratingHidden'> книги</span><span className='dots'>:</span></span>
        </div>
    </BeenReadStyles>
    </ul>
  )
}

export default BeenReadHeaderTytles