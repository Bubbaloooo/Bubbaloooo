import React, { useState } from 'react'

const PolaroidFrame = ({ picture, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  // Generate a slight rotation for each polaroid
  const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)

  return (
    <div 
      className="polaroid-frame hover-lift polaroid-hover"
      onClick={onClick}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${index * 0.2}s`
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`View ${picture.alt} from ${picture.date}`}
    >
      <div className="polaroid-inner">
        <div className="polaroid-image-container">
          {!imageLoaded && (
            <div className="polaroid-placeholder loading">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          {imageError ? (
            <div className="polaroid-placeholder error">
              <div className="error-icon">📷</div>
              <p>Memory</p>
            </div>
          ) : (
            <img
              src={picture.src}
              alt={picture.alt}
              className={`polaroid-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          )}
        </div>
        
        <div className="polaroid-caption">
          <p className="polaroid-date">{picture.date}</p>
          <div className="polaroid-tape"></div>
        </div>
      </div>
      
      {/* Vintage effects */}
      <div className="polaroid-shadow"></div>
      <div className="polaroid-corner top-left"></div>
      <div className="polaroid-corner top-right"></div>
      <div className="polaroid-corner bottom-left"></div>
      <div className="polaroid-corner bottom-right"></div>
    </div>
  )
}

export default PolaroidFrame