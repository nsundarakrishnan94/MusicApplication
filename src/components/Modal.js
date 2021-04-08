import React,{useState} from 'react'
import './Modal.css';

const Modal = ({handleClose, open, children})=> {
   
  if(!open) return null
    //const showHideClassName=open ? "modal d-block" : "modal d-none";


    

    return (
        <>
      
        <div className="modal-container">
          {children}

          <div className="footer">
            <button className='modalbtn modalclosebtn'  onClick={handleClose}>
              Close
            </button>
          </div>
        </div>

        </>
    )
}



export default Modal











