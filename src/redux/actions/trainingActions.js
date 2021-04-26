import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction("trainingBooksList/addBook");
export const deleteBook = createAction("trainingBooksList/deleteBook");

const trainingActions = {
  addBook,
  deleteBook,
};

export default trainingActions
