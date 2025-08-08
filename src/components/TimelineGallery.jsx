import React, { useState } from 'react'
import PopupModal from './PopupModal'
import '../styles/TimelineGallery.css'

const TimelineGallery = ({ onPictureClick, selectedPicture, isModalOpen, onCloseModal }) => {
  const [selectedStamp, setSelectedStamp] = useState(null)
  const [isStampModalOpen, setIsStampModalOpen] = useState(false)

  // Image data for organized grid layout
  const imageData = [
    {
      id: '1',
      src: '/src/temp_images/485AAB11-8E69-43F2-B229-7618E6296BCF.PNG',
      alt: 'Memory Image 1',
      description: 'A beautiful moment captured in time, filled with joy and laughter.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20sunset%20over%20mountains%20studio%20ghibli%20style&image_size=landscape_4_3'
    },
    {
      id: '2', 
      src: '/src/temp_images/604A73A6-B5BD-41AF-8DDC-002C4659306A.PNG',
      alt: 'Memory Image 2',
      description: 'Another precious memory that makes our journey special.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=peaceful%20forest%20path%20with%20soft%20light%20ghibli%20aesthetic&image_size=landscape_4_3'
    },
    {
      id: '3',
      src: '/src/temp_images/65A51AA3-D1D0-4AEA-B0B8-180B2AB7D887.PNG', 
      alt: 'Memory Image 3',
      description: 'A moment of pure happiness and connection.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20cottage%20in%20meadow%20studio%20ghibli%20style&image_size=landscape_4_3'
    },
    {
      id: '4',
      src: '/src/temp_images/66DA4B2E-D3F0-4753-B2E1-817104651353.PNG',
      alt: 'Memory Image 4', 
      description: 'Creating memories that will last a lifetime.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=magical%20garden%20with%20floating%20lights%20ghibli%20art&image_size=landscape_4_3'
    },
    {
      id: '5',
      src: '/src/temp_images/77F9DB42-46BA-4C30-8BF9-C55FABA0369B.PNG',
      alt: 'Memory Image 5',
      description: 'Every day brings new adventures and joy.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=dreamy%20clouds%20and%20sky%20studio%20ghibli%20aesthetic&image_size=landscape_4_3'
    },
    {
      id: '6',
      src: '/src/temp_images/96471055-DE4D-4DF7-AD49-CD7A8372F9F4.PNG',
      alt: 'Memory Image 6',
      description: 'Celebrating the beautiful moments we share.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=serene%20lake%20with%20reflection%20ghibli%20style&image_size=landscape_4_3'
    },
    {
      id: '7',
      src: '/src/temp_images/9ABE5A13-4EF6-4C0A-833A-8D5D9491DF06.PNG',
      alt: 'Memory Image 7',
      description: 'Love grows stronger with each passing day.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=whimsical%20tree%20house%20studio%20ghibli%20art&image_size=landscape_4_3'
    },
    {
      id: '8',
      src: '/src/temp_images/ChatGPT Image Aug 8, 2025 at 07_11_28 PM.png',
      alt: 'Memory Image 8',
      description: 'Special moments that warm the heart.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=enchanted%20flower%20field%20ghibli%20aesthetic&image_size=landscape_4_3'
    },
    {
      id: '9',
      src: '/src/temp_images/ChatGPT Image Aug 8, 2025 at 07_17_13 PM.png',
      alt: 'Memory Image 9',
      description: 'The journey continues with endless possibilities.',
      popupSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=mystical%20castle%20in%20clouds%20studio%20ghibli%20style&image_size=landscape_4_3'
    }
  ]

  const handleImageClick = (image) => {
    // Create popup data with different image
    const popupData = {
      ...image,
      src: image.popupSrc,
      alt: image.alt + ' - Full View'
    }
    setSelectedStamp(popupData)
    setIsStampModalOpen(true)
  }

  const handleCloseImageModal = () => {
    setIsStampModalOpen(false)
    setSelectedStamp(null)
  }

  return (
    <div className="timeline-gallery">
      <div className="timeline-header">
        <h2 className="timeline-title">Memory Collection</h2>
        <p className="timeline-subtitle">A treasure trove of beautiful moments</p>
      </div>
      
      <div className="paper-container">
        <div className="ghibli-border">
          <div className="paper-background">
            <div className="image-grid">
              {imageData.map((image) => (
                <div
                  key={image.id}
                  className="grid-item"
                  onClick={() => handleImageClick(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="grid-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {isStampModalOpen && selectedStamp && (
        <PopupModal 
          picture={selectedStamp} 
          onClose={handleCloseImageModal} 
        />
      )}
      
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