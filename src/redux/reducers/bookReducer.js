import { createReducer } from "@reduxjs/toolkit";
import { postBookSuccess } from "../actions/bookAction";

const initialState = {}

const bookReducer = createReducer(
    {...initialState},
    {
      [postBookSuccess]  : (state, action) => {
          return {
              ...state
          }
      }
    }
)

export default bookReducer;