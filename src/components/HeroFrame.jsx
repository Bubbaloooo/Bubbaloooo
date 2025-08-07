import React, { useState } from 'react'

const HeroFrame = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <div className="hero-frame">
      <div className="frame-outer">
        <div className="frame-inner">
          <div className="image-container">
            {!imageLoaded && (
              <div className="image-placeholder loading">
                <div className="loading-text">Loading beautiful memories...</div>
              </div>
            )}
            
            {imageError ? (
              <div className="image-placeholder error">
                <div className="error-text">
                  <span>♡</span>
                  <p>A beautiful memory lives here</p>
                  <span>♡</span>
                </div>
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            )}
          </div>
          
          {/* Decorative corner elements */}
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>
        </div>
      </div>
      
      {/* Frame shadow */}
      <div className="frame-shadow"></div>
    </div>
  )
}

export default HeroFrame