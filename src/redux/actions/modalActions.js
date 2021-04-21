import { createAction } from '@reduxjs/toolkit'

const toggleModal = createAction('auth/toggleModal')
const onModal = createAction('auth/onModal')
const offModal = createAction('auth/offModal')

// eslint-disable-next-line import/no-anonymous-default-export
export default { toggleModal, onModal, offModal }
