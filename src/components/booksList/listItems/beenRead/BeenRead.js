import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import TrainingIcon from '../../../icons/TrainingIcon'
import SummaryBtn from './SummaryBtn'
import StarRating from '../../../rating/StarRating'
import BeenReadStyles from './BeenReadStyles'

const BeenRead = (
  {
  iconColor,
  _id,
  title,
  author,
  year,
  pages,
  setBookId
  }) => {
  const onlyWidth = useWindowWidth()
  return (
    <BeenReadStyles key={_id}>
      <div  className='list-item'>
        <span className='item-icon'><TrainingIcon className={iconColor}/></span>
        <span className='item-book item'>{title}</span>
        <div className='description-container'>
          <span className='item-author item'>{onlyWidth < 768 && <span className='header-author header-item'>Автор: </span>}{author}</span>
          <span className='item-year item'>{onlyWidth < 768 && <span className='header-year header-item'>Рік: </span>}{year}</span>
          <span className='item-pages item'>{onlyWidth < 768 && <span className='header-pages header-item'>Стор.: </span>}{pages}</span>
          <span className='item-rating item'>{onlyWidth < 768 && <span className='header-rating header-item'>Рейтинг: </span>}<StarRating/></span>
        </div>
        <SummaryBtn id={_id} setBookId={setBookId }/>
      </div>
    </BeenReadStyles>
  )
}

export default BeenRead