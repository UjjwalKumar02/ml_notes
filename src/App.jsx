import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import SLR from './components/pages/SLR'
import MLR from './components/pages/MLR'
import Index from './components/pages/Index'

function App() {
  const Index = () => <Index />
  const SLR = () => <SLR />
  const MLR = () => <MLR />

  const [selectedComp, setSelectedComp] = useState(null)
  const [isVisible, setIsVisible] = useState(true)

  const components = [
    {id: 0, label: "Index", component: Index},
    {id: 1, label: "Simple linear regression", component: SLR},
    {id: 2, label: "Multiple linear regression", component: MLR}
  ]

  const handleClick = (id) => {
    setSelectedComp(id)
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const handleClickContent = () => {
    setSelectedComp(0)
  }

  return (
    <div className='bg-[#ffffff] md:text-[1.25rem] text-[1rem]'>
     <Navbar />
     
     
      <div className='mt-40 flex flex-col gap-4'>
       {components.map(({id, label}) => (
        <button 
        key={id}
        onClick={() => handleClick(id)}
        className='cursor-pointer'>{label}</button>
       ))}
      </div>
     
     
     <div>
      {components
         .filter((component) => component.id === selectedComp)
         .map((filteredComp) => (
          <div key={filteredComp.id}>{filteredComp.component()}</div>
         ))}
     </div>
     <Footer />
    </div>
  )
}

export default App
