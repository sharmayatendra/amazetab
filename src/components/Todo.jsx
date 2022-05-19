import React, { useState } from 'react'
import { TodoModal } from './TodoModal'

const Todo = () => {
    const [modal,setModal] = useState(false)

    const showModalHandler = () => {
        setModal(prev => !prev)
    }
  return (
    // <div className="todo-container">
    <>
    <button className="todo-btn" onClick={showModalHandler}>Todo</button>
    <div className='todo-rel'>
    {modal && <TodoModal />}
    </div>
    </>
    // </div>
  )
}

export { Todo }