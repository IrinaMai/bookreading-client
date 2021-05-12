import React from 'react';
import DeleteIcon from "../icons/DeleteIcon";
import { useDispatch } from 'react-redux'
import {patchBookAtDB} from '../../redux/operations/bookOperation'


const DeleteButton = ({ id }) => {
    const dispatch = useDispatch()

    const onDeleteBook = (e) => {
   
        dispatch(patchBookAtDB(e.currentTarget.dataset.id, {isDeleted: true}) )
    }

    return (
        <button
        type="button"
        data-id={id}
        onClick={onDeleteBook}
        >
        <DeleteIcon className="deleteIcon" />
      </button>
    )
}

export default DeleteButton
