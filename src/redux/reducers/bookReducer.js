import { createReducer } from "@reduxjs/toolkit";
import { postBookSuccess } from "../actions/bookAction";


const initialState = [
  // {title: '',
  // author: '',
  // year: "",
  // pages: "",
  // _id: ""}
]

const bookReducer = createReducer(
     [...initialState],
    {
      [postBookSuccess]  : (state, action) => {
          return [...state,{...action.payload.data} ]
      }
    }
)

export default bookReducer;