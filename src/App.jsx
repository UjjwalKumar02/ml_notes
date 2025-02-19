import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import SLR from './components/pages/SLR.jsx'
import MLR from './components/pages/MLR'
import PLR from './components/pages/PLR'

function App() {
  const Slr = () => <SLR />
  const Mlr = () => <MLR />
  const Plr = () => <PLR />

  const [selectedComp, setSelectedComp] = useState(null)
  const [showList, setShowList] = useState(false)

  const components = [
    {id: 1, label: "Simple linear regression", component: Slr},
    {id: 2, label: "Multiple linear regression", component: Mlr},
    {id: 3, label: "Polynomial regression", component: Plr},
    {id: 4, label: "Ridge regression", component: Plr},
    {id: 5, label: "Lasso regression", component: Plr},
    {id: 6, label: "ElasticNet regression", component: Plr},
    {id: 7, label: "Updating soon...", component: Slr}
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
        <div className='mt-40 flex flex-col w-fit gap-1 mx-auto'>
        {components.map(({id, label}) => (
         <button 
         key={id}
         onClick={() => handleClick(id)}
         className='border-b border-b-gray-200 px-3 py-3 cursor-pointer'>{label}</button>
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
