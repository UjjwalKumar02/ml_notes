import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import SLR from './components/pages/SLR.jsx'
import MLR from './components/pages/MLR'
import PLR from './components/pages/PLR'


function App() {
  const [selectedComp, setSelectedComp] = useState(null)
  const [showList, setShowList] = useState(false)


  const Slr = () => <SLR />
  const Mlr = () => <MLR />
  const Plr = () => <PLR />


  const components = [
    {id: 1, label: "Simple linear regression", component: Slr},
    {id: 3, label: "Multiple linear regression", component: Mlr},
    {id: 4, label: "Polynomial regression", component: Plr},
    {id: 5, label: "Ridge regression", component: Plr},
    {id: 6, label: "Lasso regression", component: Plr},
    {id: 7, label: "ElasticNet regression", component: Plr},
    {id: 8, label: "Updating soon...", component: Slr}
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
    <div 
    className='bg-[#ffffff] md:text-[1.25rem] text-[1rem]'
    >
      <Navbar toggleList={toggleList}/>
      
        {selectedComp === null && (
          <div className='mt-34 flex flex-col w-fit gap-7 mx-auto'>
          {components.map(({id, label}) => (
            <button 
            key={id}
            onClick={() => handleClick(id)}
            className='cursor-pointer hover:bg-gray-100 px-4 rounded-lg'>{label}</button>
          ))}
        </div>
        )}
      
      
      <div>
        {components
          .filter((component) => component.id === selectedComp)
          .map((filteredComp) => (
            <div key={filteredComp.id}>
              <filteredComp.component />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  )
}

export default App