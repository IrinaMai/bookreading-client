import React from 'react'
import { useSelector } from 'react-redux'
import getModalState from '../../redux/selectors/modalSelector'
import StarIcon from './StarIcon'
import StarStyled from './StarStyled.js'

const StarRating = ({ rating, setRating }) => {
  const modal = useSelector(getModalState)
  return (
    <StarStyled modal={modal}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            <input
              type="radio"
              value={ratingValue}
              name="rating"
              onClick={() => setRating(ratingValue)}
            />
            <StarIcon
              className="star"
              width={17}
              fill={ratingValue <= rating ? '#FF6B08' : 'transparent'}
              stroke={rating > 0 ? '#FF6B08' : '#a6abb9'}
            />
          </label>
        )
      })}
    </StarStyled>
  )
}

export default StarRating
