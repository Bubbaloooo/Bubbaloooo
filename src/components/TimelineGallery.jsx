import React from 'react'
import PictureGrid from './PictureGrid'
import PopupModal from './PopupModal'
import '../styles/TimelineGallery.css'

const TimelineGallery = ({ onPictureClick, selectedPicture, isModalOpen, onCloseModal }) => {
  const timelineData = [
    {
      id: '1',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20couple%20walking%20on%20beach%20sunset%20vintage%20aesthetic%20warm%20golden%20light&image_size=portrait_4_3',
      alt: 'Beach Walk at Sunset',
      date: 'Summer 2023',
      description: 'Our first walk on the beach together. The sunset painted the sky in the most beautiful colors, just like how you painted my world with joy and love. I knew that day that you were someone special.',
      position: { x: 10, y: 0 }
    },
    {
      id: '2',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20coffee%20shop%20date%20vintage%20aesthetic%20warm%20lighting%20romantic%20atmosphere&image_size=square',
      alt: 'Coffee Shop Date',
      date: 'Autumn 2023',
      description: 'Remember our first coffee date? You were nervous and kept stirring your latte even though the sugar had long dissolved. Your laugh when you realized it made my heart skip a beat.',
      position: { x: -15, y: 300 }
    },
    {
      id: '3',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20snow%20couple%20holding%20hands%20vintage%20aesthetic%20cozy%20atmosphere&image_size=landscape_4_3',
      alt: 'Winter Wonderland',
      date: 'Winter 2023',
      description: 'Our first winter together. Building snowmen and having snowball fights like kids. Your cheeks were so red from the cold, but your smile was the warmest thing I had ever seen.',
      position: { x: 20, y: 600 }
    },
    {
      id: '4',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20picnic%20flowers%20blooming%20romantic%20vintage%20aesthetic%20soft%20lighting&image_size=portrait_16_9',
      alt: 'Spring Picnic',
      date: 'Spring 2024',
      description: 'Our picnic in the park when the cherry blossoms were in full bloom. You said the flowers were beautiful, but all I could see was you. That was the day I knew I was completely in love.',
      position: { x: -10, y: 900 }
    },
    {
      id: '5',
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=birthday%20celebration%20cake%20candles%20warm%20lighting%20vintage%20aesthetic%20joyful&image_size=square_hd',
      alt: 'Birthday Celebration',
      date: 'Today',
      description: 'And here we are today, celebrating another year of your beautiful existence. Every day with you feels like a gift, but today is extra special because it\'s all about celebrating the amazing person you are.',
      position: { x: 15, y: 1200 }
    }
  ]

  return (
    <div className="timeline-gallery">
      <div className="timeline-header">
        <h2 className="timeline-title">Our Beautiful Journey</h2>
        <p className="timeline-subtitle">Every moment with you is a treasure worth remembering</p>
      </div>
      
      <PictureGrid 
        pictures={timelineData} 
        onPictureClick={onPictureClick} 
      />
      
      {isModalOpen && selectedPicture && (
        <PopupModal 
          picture={selectedPicture} 
          onClose={onCloseModal} 
        />
      )}
    </div>
  )
}

export default TimelineGallery