import React from 'react'
import PolaroidFrame from './PolaroidFrame'

const PictureGrid = ({ pictures, onPictureClick }) => {
  return (
    <div className="picture-grid">
      <div className="timeline-line"></div>
      
      {pictures.map((picture, index) => (
        <div 
          key={picture.id}
          className="picture-item"
          style={{
            transform: `translateX(${picture.position.x}px)`,
            marginTop: index === 0 ? '0' : '2rem'
          }}
        >
          <PolaroidFrame 
            picture={picture} 
            onClick={() => onPictureClick(picture)}
            index={index}
          />
        </div>
      ))}
    </div>
  )
}

export default PictureGrid