import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../components/modal/Modal'
import getModalState from '../../redux/selectors/modalSelector'
import modalActions from '../../redux/actions/modalActions'

const LibraryPage = () => {
  const dispatch = useDispatch()
  const isModal = useSelector(getModalState)
  const openModal = useSelector(getModalState)

  return (
    <div>
      <h2>Library Page</h2>
      <button onClick={openModal}>openModal</button>
      <Modal />
    </div>
  )
}

export default LibraryPage
