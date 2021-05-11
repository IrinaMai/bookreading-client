import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../../../redux/actions/modalActions'



const SummaryBtn = ({ id, setBookId }) => {
  const dispatch = useDispatch()


  const handleClick = (e) => {
    dispatch(modalActions.setModalContent('resume'))
    dispatch(modalActions.toggleModal())
    setBookId(e.currentTarget.dataset.id)
  }
  return (
    <>
      <button type="button" className="summaryBtn" data-id={id} onClick={handleClick}>
        Резюме
      </button>
    </>
  )
}

export default SummaryBtn
