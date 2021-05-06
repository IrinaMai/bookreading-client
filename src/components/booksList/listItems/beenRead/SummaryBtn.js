import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../modal/Modal'
import Resume from '../../../resume/Resume'
import modalActions from '../../../../redux/actions/modalActions'
import { getModalContent } from '../../../../redux/selectors/modalSelector'

import BeenReadStyles from './BeenReadStyles'

const SummaryBtn = () => {
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)
  const handleClick = () => {
    dispatch(modalActions.setModalContent('resume'))
    dispatch(modalActions.toggleModal())
  }
  return (
    <BeenReadStyles>
      <button type="button" className="summaryBtn" onClick={handleClick}>
        Резюме
      </button>
      {showModal === 'resume' && (
        <Modal>
          <Resume />
        </Modal>
      )}
    </BeenReadStyles>
  )
}

export default SummaryBtn
