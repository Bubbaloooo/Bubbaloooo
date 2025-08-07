import React from 'react'

const Annotation = ({ annotation }) => {
  return (
    <div className="annotation">
      <div className="annotation-content">
        <h2 className="annotation-title">{annotation.title}</h2>
        <p className="annotation-date">{annotation.date}</p>
        <div className="annotation-message">
          <p>{annotation.message}</p>
        </div>
        
        {/* Decorative elements */}
        <div className="annotation-decoration">
          <span className="decoration-line"></span>
          <span className="decoration-heart">♡</span>
          <span className="decoration-line"></span>
        </div>
      </div>
    </div>
  )
}

export default Annotation