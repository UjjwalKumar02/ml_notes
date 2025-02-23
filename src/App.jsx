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
    {id: 1, label: "Simple Linear Regression", component: Slr},
    {id: 2, label: "Multiple Linear Regression", component: Mlr},
    {id: 3, label: "Polynomial Regression", component: Plr},
    {id: 4, label: "Ridge Regression", component: Plr},
    {id: 5, label: "Lasso Regression", component: Plr},
    {id: 6, label: "ElasticNet Regression", component: Plr},
    {id: 7, label: "Hyperparameter Tuning", component: Slr},
    {id: 8, label: "Logistic Regression", component: Slr},
    {id: 9, label: "SVM", component: Slr},
    {id: 10, label: "Naive Bayes", component: Slr},
    {id: 11, label: "KNN", component: Slr},
    {id: 12, label: "Decision Tree", component: Slr},
    {id: 13, label: "Random Forest", component: Slr},
    {id: 14, label: "AdaBoost", component: Slr},
    {id: 15, label: "Gradient Boost", component: Slr},
    {id: 16, label: "XgBoost", component: Slr},
    {id: 17, label: "More coming...", component: Slr},
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
          <div className='mt-34 flex flex-col w-fit gap-7 items-start mx-auto'>
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