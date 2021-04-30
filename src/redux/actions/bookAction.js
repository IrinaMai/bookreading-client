import { createAction } from '@reduxjs/toolkit'

const postBookRequest = createAction('@book/postBookRequest')
const postBookSuccess = createAction('@book/postBookSuccess')
const postBookError = createAction('@book/postBookError')

const patchBookRequest = createAction('@book/patchBookRequest')
const patchBookSuccess = createAction('@book/patchBookSuccess')
const patchBookError = createAction('@book/patchBookError')

export {
  postBookRequest,
  postBookSuccess,
  postBookError,
  patchBookRequest,
  patchBookSuccess,
  patchBookError,
}
