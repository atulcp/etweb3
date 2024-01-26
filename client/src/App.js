import { bgImg9 } from './assets/img/imgAssets'  
const App = () => {
  return (
    <div className="font-oswald font-extrabold text-6xl h-screen flex justify-center items-center" 
    
    style={{backgroundImage: `url(${bgImg9})`,
    backgroundSize: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: "fixed",
    backgroundPosition: 'center',}}

    >
      <div className='flex flex-col items-center justify-center'>
        <p className='py-1'>Hello</p>
        <p className='py-1 text-lg text-orange-600 font-extralight'>A new Eternity is in the making. Check back soon.</p>
      </div>
      
    </div>
  )
}

export default App
