import React, { useState } from 'react'
import { bgImg9 } from './assets/img/imgAssets'  
import Cards from './components/Cards'
const App = () => {

  const [isCardDisplayed, setIsCardDisplayed] = useState(false)
  const handleCardChange = (currentIndex) => {
    setIsCardDisplayed(currentIndex >= 0)
  }

  return (
    <div className="font-oswald font-extrabold text-6xl min-h-screen flex justify-center items-center" 
    
    style={{backgroundImage: `url(${bgImg9})`,
    backgroundSize: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: "fixed",
    backgroundPosition: 'center',}}

    >
      <div className='flex flex-col items-center justify-center'>
      {!isCardDisplayed && (
          <>
            <p className='py-1'>Hello</p>
            <p className='py-1 text-lg text-orange-600 font-extralight'>A new Eternity is in the making. Check back soon.</p>
          </>
        )}
      <Cards onCardChange={handleCardChange} />
      </div>
      
      
    </div>
  )
}

export default App
