import React from 'react';
import DeleteIcon from "../icons/DeleteIcon";
import { useDispatch } from 'react-redux'
import {patchBookAtDB} from '../../redux/operations/bookOperation'


const DeleteButton = ({ id }) => {
    const dispatch = useDispatch()

    const onDeleteBook = (e) => {
        console.log('e.taget :>> ', e.currentTarget.dataset.id);
        dispatch(patchBookAtDB(e.currentTarget.dataset.id, {isDeleted: true}) )
    }

    return (
        <button
        type="button"
        data-id={id}
        onClick={onDeleteBook}
        className="deleteButton"
        >
        <DeleteIcon className="deleteIcon" />
      </button>
    )
}

export default DeleteButton
