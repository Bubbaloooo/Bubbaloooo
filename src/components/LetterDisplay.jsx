import React from 'react'

const LetterDisplay = ({ letter }) => {
  if (!letter) return null

  // Split content by \n to create paragraphs
  const paragraphs = letter.content.split('\n').filter(p => p.trim() !== '')

  return (
    <div className="letter-display fade-in">
      <div className="letter-paper">
        <div className="letter-header">
          <h3 className="letter-title">{letter.title}</h3>
          <p className="letter-date">{letter.date}</p>
        </div>
        
        <div className="letter-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="letter-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="letter-signature">
          <div className="signature-line"></div>
          <p className="signature-text">With all my love ♡</p>
        </div>
        
        {/* Paper texture and decorative elements */}
        <div className="paper-lines"></div>
        <div className="paper-holes">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
      </div>
    </div>
  )
}

export default LetterDisplay