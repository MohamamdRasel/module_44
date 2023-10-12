
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/NavBar/NavBar'
import Percent from './assets/components/Percent'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <DaisyNav></DaisyNav>
      <Percent></Percent>

    </>
  )
}

export default App
