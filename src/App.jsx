import React, { useState } from 'react'
import Navigation from './components/Navigation'
import BirthdayPost from './components/BirthdayPost'
import TimelineGallery from './components/TimelineGallery'
import LettersSection from './components/LettersSection'
import './styles/globals.css'
import './styles/animations.css'
import './styles/Navigation.css'
import './styles/BirthdayPost.css'
import './styles/TimelineGallery.css'
import './styles/LettersSection.css'

function App() {
  const [activeTab, setActiveTab] = useState('birthday')
  const [selectedPicture, setSelectedPicture] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentLetter, setCurrentLetter] = useState(0)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handlePictureClick = (picture) => {
    setSelectedPicture(picture)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPicture(null)
  }

  const handleLetterChange = (index) => {
    setCurrentLetter(index)
  }

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="main-content">
        {activeTab === 'birthday' && (
          <div className="tab-content fade-in">
            <BirthdayPost />
          </div>
        )}
        
        {activeTab === 'timeline' && (
          <div className="tab-content fade-in">
            <TimelineGallery 
              onPictureClick={handlePictureClick}
              selectedPicture={selectedPicture}
              isModalOpen={isModalOpen}
              onCloseModal={handleCloseModal}
            />
          </div>
        )}
        
        {activeTab === 'letters' && (
          <div className="tab-content fade-in">
            <LettersSection 
              currentLetter={currentLetter}
              onLetterChange={handleLetterChange}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default App