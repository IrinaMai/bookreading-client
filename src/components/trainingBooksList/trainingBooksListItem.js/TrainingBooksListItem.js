import React from 'react'
import TrainingIcon from '../../icons/TrainingIcon'

const TrainingBooksListItem = ({ id, title, author, year, pages }) => {
  return (
    <li key={id}>
      <TrainingIcon/>
      <p>{title}</p>
      <p>{author}</p>
      <p>{year}</p>
      <p>{pages}</p>
    </li>
  )
}

export default TrainingBooksListItem
