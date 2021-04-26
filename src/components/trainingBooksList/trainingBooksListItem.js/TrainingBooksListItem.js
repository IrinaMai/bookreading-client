import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import TrainingIcon from '../../icons/TrainingIcon'
import { useWindowWidth } from '@react-hook/window-size'

const TrainingBooksListItem = ({
  _id,
  title,
  author,
  year,
  pages,
  onDeleteBook,
}) => {
  const onlyWidth = useWindowWidth()

  return (
    <li key={_id} className="listItem">
      <TrainingIcon className="trainingIcon" />
      <p className="description">{title}</p>
      <p className="description">
        {onlyWidth < 768 && <span className="label">Автор:</span>}
        {!author ? '...' : author}
      </p>

      <p className="description">
        {onlyWidth < 768 && <span className="label">Рік:</span>}
        {!year ? '...' : year}
      </p>

      <p className="description">
        {onlyWidth < 768 && <span className="label">Стор.:</span>}
        {!pages ? '...' : pages}
      </p>
      <button
        type="button"
        data-id={_id}
        onClick={onDeleteBook}
        className="deleteButton"
      >
        {_id && <DeleteIcon className="deleteIcon" />}
      </button>
    </li>
  )
}

export default TrainingBooksListItem
