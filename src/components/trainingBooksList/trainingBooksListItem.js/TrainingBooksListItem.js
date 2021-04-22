import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import TrainingIcon from '../../icons/TrainingIcon'

const TrainingBooksListItem = ({
  id,
  title,
  author,
  year,
  pages,
  onDeleteContact,
}) => {
  return (
    <li key={id}>
      <TrainingIcon />
      <p>{title}</p>
      <p>{author}</p>
      <p>{year}</p>
      <p>{pages}</p>
      <button type="button" data-id={id} onClick={onDeleteContact}>
      <DeleteIcon/>
      </button>
    </li>
  )
}

export default TrainingBooksListItem
