import React from 'react'
import HeroFrame from './HeroFrame'
import Annotation from './Annotation'
import '../styles/BirthdayPost.css'

const BirthdayPost = () => {
  const birthdayData = {
    image: {
      src: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20birthday%20celebration%20with%20warm%20golden%20lighting%20vintage%20aesthetic%20romantic%20atmosphere&image_size=square_hd',
      alt: 'A Beautiful Birthday Celebration'
    },
    annotation: {
      title: 'Happy Birthday, My Love',
      date: 'A Special Day',
      message: `On this beautiful day, I want you to know how much you mean to me. Every moment with you feels like a celebration, but today is extra special because it's all about you. Your smile lights up my world, and your laughter is the sweetest melody I know. Here's to another year of adventures, love, and countless memories together. Happy Birthday, my darling! ♡`
    }
  }

  return (
    <div className="birthday-post">
      <div className="birthday-container">
        <HeroFrame image={birthdayData.image} />
        <Annotation annotation={birthdayData.annotation} />
      </div>
    </div>
  )
}

export default BirthdayPost