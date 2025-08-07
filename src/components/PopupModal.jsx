import React, { useEffect } from 'react'
import { X } from 'lucide-react'

const PopupModal = ({ picture, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal-content scale-in">
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="modal-image-container">
          <img 
            src={picture.src} 
            alt={picture.alt}
            className="modal-image"
          />
          <div className="modal-image-overlay">
            <span className="modal-date">{picture.date}</span>
          </div>
        </div>
        
        <div className="modal-text">
          <h3 className="modal-title">{picture.alt}</h3>
          <p className="modal-description">{picture.description}</p>
          
          <div className="modal-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-heart">♡</span>
            <span className="decoration-line"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupModal