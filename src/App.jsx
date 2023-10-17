
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/NavBar/NavBar'
import Percent from './assets/components/Percent'
import PriceOptions from './assets/components/PriceOptions/PriceOptions'



function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>

      
      {/* <DaisyNav></DaisyNav>
      <Percent></Percent> */}

    </>
  )
}

export default App
