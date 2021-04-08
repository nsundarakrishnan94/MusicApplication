import React from 'react'
import './PlaylistModal.css'

const PlaylistModal=({handleClose, open, children})=> {
    if(!open) return null
 
    return (
        <>
      
        <div className="playlist-modal-container">
          {children}

          <div className="footer">
            <button className='modalbtn playlist-modalclosebtn'  onClick={handleClose}>
              X
            </button>
          </div>
        </div>

        </>
    )
}



export default PlaylistModal
