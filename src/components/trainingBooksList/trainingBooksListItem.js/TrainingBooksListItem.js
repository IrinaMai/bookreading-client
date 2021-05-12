import React from 'react'
import DeleteIcon from '../../icons/DeleteIcon'
import TrainingIcon from '../../icons/TrainingIcon'
import { useWindowWidth } from '@react-hook/window-size'
import { getActiveTrainingID } from '../../../redux/selectors/trainingSelectors'
import { useSelector } from 'react-redux'

const TrainingBooksListItem = ({
  _id,
  title,
  author,
  year,
  pages,
  status,
  onDeleteBook,
}) => {
  const onlyWidth = useWindowWidth()
  const activeTrainingID = useSelector(getActiveTrainingID)

  return (
    <li key={_id} className="listItem">
      <TrainingIcon
        className={
          status === 'HaveRead' ? 'trainingIconActive' : 'trainingIcon'
        }
        />
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
        {_id && !activeTrainingID && <DeleteIcon className="deleteIcon" />}
      </button>
    </li>
  )
}

export default TrainingBooksListItem
