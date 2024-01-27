import React, { useState, useEffect } from 'react'
import { bgImg10,bgImg11,bgImg12, bgImg13,bgImg14,bgImg15,bgImg16,bgImg17 } from './assets/img/imgAssets'  // Import only three images
import Cards from './components/Cards'

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isCardDisplayed, setIsCardDisplayed] = useState(false)

  // const images = [bgImg10, bgImg11,bgImg12, bgImg13,bgImg14,bgImg15,bgImg16,bgImg17 ] // Array of images
  // const textColors = ['text-black','text-black', 'text-orange-600','text-orange-600','text-black','text-black','text-black','text-black' ]

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
  // const currentTextColor = isCardDisplayed ? 'text-orange-600' : ( imageInfo[currentImageIndex].imageBgType === 'dark' ? 'text-orange-600' : 'text-black' ) 
  const currentTextColor = imageInfo[currentImageIndex].imageBgType === 'dark' ? 'text-orange-600' : 'text-black'

  return (
    <div 
      // className="font-oswald font-extrabold text-6xl min-h-screen flex justify-center items-center"
      // style={{
      //   backgroundImage: `url(${currentImage})`,
      //   backgroundSize: "100%",
      //   backgroundRepeat: 'no-repeat',
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: 'center',
      // }}

      className={`font-oswald font-extrabold text-4xl md:text-6xl min-h-screen flex justify-center items-center bg-no-repeat bg-fixed bg-center ${
        isCardDisplayed ? 'bg-cover' : 'bg-cover'
      }`}
      style={{ backgroundImage: `url(${currentImage})` }}
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
