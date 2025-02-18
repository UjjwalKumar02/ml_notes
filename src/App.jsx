import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import SLR from './components/pages/SLR.jsx'
import MLR from './components/pages/MLR'

function App() {
  const Slr = () => <SLR />
  const Mlr = () => <MLR />

  const [selectedComp, setSelectedComp] = useState(null)
  const [showList, setShowList] = useState(false)

  const components = [
    {id: 1, label: "Simple linear regression", component: Slr},
    {id: 2, label: "Multiple linear regression", component: Mlr},
    {id: 3, label: "Updating soon...", component: Slr}
  ]

  const handleClick = (id) => {
    setSelectedComp(id)
    showList(false)
  }

  const toggleList = () => {
    setShowList(!showList)
    setSelectedComp(null)
  }

  return (
    <div className='bg-[#ffffff] md:text-[1.25rem] text-[1rem]'>
     <Navbar toggleList={toggleList}/>
     
     
      {selectedComp === null && (
        <div className='mt-40 flex flex-col gap-4 h-dvh'>
        {components.map(({id, label}) => (
         <button 
         key={id}
         onClick={() => handleClick(id)}
         className=''>{label}</button>
        ))}
       </div>
      )}
     
     
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
