import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'
import SLR from './components/pages/SLR'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#ffffff] md:text-lg text-sm'>
     <Navbar />
     <SLR />
     <Footer />
    </div>
  )
}

export default App
