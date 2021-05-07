import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import modalActions from '../../../../redux/actions/modalActions'
import { getModalContent } from '../../../../redux/selectors/modalSelector'



const SummaryBtn = ({ id, setBookId }) => {
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)


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
