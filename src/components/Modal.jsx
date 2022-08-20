import React, { useState } from 'react'
import { AiOutlineCloseCircle }from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from './Contexto';
//import '../styles/Modal.css'

const Modal = () => {

  const [contextState, setContextState] = useContext(false);

  return ( 
    <>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <p className='modal-title'> CONTACTO </p>
          <p className='modal-title' id='title-msg'>{contextState.message}</p>
          <AiOutlineCloseCircle onClick={() => {setContextState(false)}} className='btn-close'/>   
        </div>
        <div className='modalForm'>
          
        </div>
      </div>
    </>
  )
}
export default Modal;