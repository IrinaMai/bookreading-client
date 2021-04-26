import { createAction } from '@reduxjs/toolkit'

const toggleModal = createAction('modal/toggleModal')
const onModal = createAction('modal/onModal')
const offModal = createAction('modal/offModal')
const setModalContent = createAction('modal/setContent')
const clearModalContent = createAction('modal/clearContent')

export default { toggleModal, onModal, offModal, setModalContent, clearModalContent }
