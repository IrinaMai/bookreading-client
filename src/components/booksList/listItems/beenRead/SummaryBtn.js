import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../modal/Modal'
import Resume from '../../../resume/Resume'
import modalActions from '../../../../redux/actions/modalActions'
import { getModalContent } from '../../../../redux/selectors/modalSelector'

import BeenReadStyles from './BeenReadStyles'
import { getCurrentBook } from '../../../../redux/actions/bookAction'

const SummaryBtn = ({id}) => {
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)
  const handleClick = (e) => {
    // const resumeId = e.target.dataset.id
    console.log(e.target.dataset.id)
 
    dispatch(getCurrentBook(e.target.dataset.id))
    dispatch(modalActions.setModalContent('resume'))
    dispatch(modalActions.toggleModal())
  }
  return (
    <BeenReadStyles>
      <button type="button" className="summaryBtn" data-id={id} onClick={handleClick}>
        Резюме
      </button>
      {showModal === 'resume' && (
        <Modal>
          <Resume id = {id} />
        </Modal>
      )}
    </BeenReadStyles>
  )
}

export default SummaryBtn
