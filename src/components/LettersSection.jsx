import React from 'react'
import LetterDisplay from './LetterDisplay'
import LetterNavigation from './LetterNavigation'
import '../styles/LettersSection.css'

const LettersSection = ({ currentLetter, onLetterChange }) => {
  const letters = [
    {
      id: '1',
      title: 'The Day We Met',
      date: 'A Beautiful Beginning',
      content: `My Dearest Love,\n\nDo you remember the first time our eyes met? I do. It was like the whole world suddenly made sense. There you were, laughing at something your friend said, and I knew in that instant that my life was about to change forever.\n\nI was nervous to approach you, my hands were shaking, and I probably said something completely ridiculous. But you smiled at me with such warmth that all my fears melted away. That smile of yours – it's been my favorite thing in this world ever since.\n\nFrom that very first conversation, I knew you were special. The way you listened, really listened, and the way you saw the world with such wonder and kindness. I fell for your laugh, your curiosity, your gentle heart.\n\nThank you for giving a nervous stranger a chance that day. Thank you for seeing something in me worth knowing.\n\nWith all my love,\nYour devoted admirer ♡`
    },
    {
      id: '2',
      title: 'Why I Love You',
      date: 'A Thousand Reasons',
      content: `My Beautiful Soul,\n\nWhere do I even begin? How do I put into words the depth of what you mean to me?\n\nI love the way you scrunch your nose when you're concentrating. I love how you always remember the little things that matter to people. I love your terrible jokes that somehow always make me laugh anyway.\n\nI love your strength – the way you face challenges with such grace and determination. I love your vulnerability – how you trust me with your fears and dreams. I love your passion for the things you care about, and how your eyes light up when you talk about them.\n\nI love how you make ordinary moments feel magical. A simple walk becomes an adventure. A quiet evening becomes a treasure. You have this incredible gift of finding joy in the smallest things, and you've taught me to see the world through your eyes.\n\nI love how you love – completely, honestly, without reservation. You've shown me what it means to be truly seen and accepted for who I am.\n\nMost of all, I love how you make me want to be the best version of myself, not by changing me, but by loving me exactly as I am.\n\nForever yours,\nThe luckiest person alive ♡`
    },
    {
      id: '3',
      title: 'Our Future Together',
      date: 'Dreams and Promises',
      content: `My Forever Love,\n\nI dream about our future together every single day. I see us growing old together, still holding hands, still making each other laugh until our sides hurt.\n\nI imagine lazy Sunday mornings where we stay in bed too long, talking about everything and nothing. I see us traveling to places we've only dreamed of, collecting memories like souvenirs. I picture us building a home filled with love, laughter, and maybe a few too many plants (because I know how much you love them).\n\nI want to be there for all of it – the big moments and the small ones. I want to celebrate your victories and comfort you through challenges. I want to grow with you, learn with you, and discover new things about each other even after decades together.\n\nI promise to love you through all seasons of life. When we're young and adventurous, when we're busy and stressed, when we're old and gray. I promise to choose you every day, to support your dreams, and to build a life with you that's even better than anything we could imagine alone.\n\nYou are my today, my tomorrow, and all my tomorrows after that.\n\nWith endless love and devotion,\nYour partner in all adventures ♡`
    }
  ]

  return (
    <div className="letters-section">
      <div className="letters-header">
        <h2 className="letters-title">Letters From My Heart</h2>
        <p className="letters-subtitle">Words I've been saving just for you</p>
      </div>
      
      <div className="letters-container">
        <LetterDisplay letter={letters[currentLetter]} />
        
        <LetterNavigation 
          letters={letters}
          currentLetter={currentLetter}
          onLetterChange={onLetterChange}
        />
      </div>
    </div>
  )
}

export default LettersSection