import React, { useState, useEffect, useCallback } from 'react'
import { bgImg9 } from '../assets/img/imgAssets'

const Cards = ({ onCardChange }) => {
  const [currentIndex, setCurrentIndex] = useState(-1)

  const cardContents = [
    "Welcome!",
    "Et Makers",
    "Et - Journey thus far",
    "Et - Journey Ahead",
    "EtON - Launch"
  ]

  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        setCurrentIndex(prevIndex => prevIndex < cardContents.length - 1 ? prevIndex + 1 : prevIndex)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        setCurrentIndex(prevIndex => prevIndex > -1 ? prevIndex - 1 : prevIndex)
        break
      default:
        break
    }
  }, [cardContents.length]) // Dependency array

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown]) // Updated dependency array

  useEffect(() => {
    onCardChange(currentIndex) 
  }, [currentIndex, onCardChange])

  return (
    <div className="flex flex-col items-center justify-center">
      {cardContents.slice(0, currentIndex + 1).map((content, index) => (
        <div key={index} className="p-4 w-96 rounded-full z-40 shadow-lg shadow-gray-200 border-double border border-black bg-cover text-gray-400 mx-auto my-2 text-xl font-extralight hover:bg-orange-600 hover:text-white hover:cursor-pointer hover:border-orange-600" style={{backgroundImage: `url(${bgImg9})`,}}>
          {content}
        </div>
      ))}
    </div>
  )
}

export default Cards
