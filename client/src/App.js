import React, { useState, useEffect } from 'react'
import { bgImg10,bgImg11,bgImg12, bgImg13,bgImg14,bgImg15,bgImg16,bgImg17 } from './assets/img/imgAssets'  // Import only three images
import Cards from './components/Cards'

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isCardDisplayed, setIsCardDisplayed] = useState(false)
  // Touch points for swipe gesture
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  
  const imageInfo = [
    {src: bgImg10, imageBgType: 'light'},
    {src: bgImg11, imageBgType: 'light'},
    {src: bgImg12, imageBgType: 'dark'},
    {src: bgImg13, imageBgType: 'light'},
    {src: bgImg14, imageBgType: 'dark'},
    {src: bgImg15, imageBgType: 'light'},
    {src: bgImg16, imageBgType: 'light'},
    {src: bgImg17, imageBgType: 'light'},
  ]

  // Minimum swipe distance
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // Reset touchEnd to null on new touch
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // You can trigger the same action as your arrow press here
    if (isLeftSwipe || isRightSwipe) {
      // Example: Toggle card display or navigate through cards
      setIsCardDisplayed(!isCardDisplayed)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageInfo.length)
    }, 5000) // Change image every 5000ms (5 seconds)

    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [isCardDisplayed, imageInfo.length])

  const handleCardChange = (currentIndex) => {
    setIsCardDisplayed(currentIndex >= 0)
  }

  const currentImage = isCardDisplayed ? bgImg12 : imageInfo[currentImageIndex].src
  const currentTextColor = imageInfo[currentImageIndex].imageBgType === 'dark' ? 'text-orange-600' : 'text-black'

  return (
    <div 
      className={`font-oswald font-extrabold text-4xl md:text-6xl min-h-screen flex justify-center items-center bg-no-repeat bg-fixed bg-center bg-cover`}
      style={{ backgroundImage: `url(${currentImage})` }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className='flex flex-col items-center justify-center'>
        {!isCardDisplayed && (
          <>
            <p className={`py-1 ${currentTextColor}`}>Hello</p>
            <p className={`py-1 text-sm md:text-lg font-extralight ${currentTextColor}`}>A new Eternity is in the making. Check back soon.</p>
          </>
        )}
        <Cards onCardChange={handleCardChange} />
      </div>
    </div>
  )
}

export default App
