import React from 'react'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'

const LetterNavigation = ({ letters, currentLetter, onLetterChange }) => {
  const handlePrevious = () => {
    if (currentLetter > 0) {
      onLetterChange(currentLetter - 1)
    }
  }

  const handleNext = () => {
    if (currentLetter < letters.length - 1) {
      onLetterChange(currentLetter + 1)
    }
  }

  return (
    <div className="letter-navigation">
      <div className="nav-controls">
        <button 
          className={`nav-btn prev ${currentLetter === 0 ? 'disabled' : ''}`}
          onClick={handlePrevious}
          disabled={currentLetter === 0}
          aria-label="Previous letter"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </button>
        
        <div className="letter-indicator">
          <Mail size={16} />
          <span>{currentLetter + 1} of {letters.length}</span>
        </div>
        
        <button 
          className={`nav-btn next ${currentLetter === letters.length - 1 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={currentLetter === letters.length - 1}
          aria-label="Next letter"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="letter-dots">
        {letters.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentLetter ? 'active' : ''}`}
            onClick={() => onLetterChange(index)}
            aria-label={`Go to letter ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>
      
      <div className="letter-titles">
        {letters.map((letter, index) => (
          <button
            key={letter.id}
            className={`title-btn ${index === currentLetter ? 'active' : ''}`}
            onClick={() => onLetterChange(index)}
          >
            <span className="title-text">{letter.title}</span>
            <span className="title-date">{letter.date}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LetterNavigation