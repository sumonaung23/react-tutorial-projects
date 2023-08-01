import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
<<<<<<< HEAD
const List = ({items, removeItem, editItem}) => {
=======
const List = ({items}) => {
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id,title} = item;
        return <>
          <article className='grocery-item' key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
<<<<<<< HEAD
              <button type='button' className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type='button' className="delete-btn" onClick={() => removeItem(id)}>
=======
              <button type='button' className="edit-btn">
                <FaEdit />
              </button>
              <button type='button' className="delete-btn">
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
                <FaTrash />
              </button>
            </div>
          </article>
        </>
      })}
    </div>
  )
}

export default List
