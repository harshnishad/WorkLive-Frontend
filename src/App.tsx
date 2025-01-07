
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Pages/Homepage'

function App() {
  return (
  <>
   <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/hello' element={<h1>hello</h1>} />
   </Routes>
  
  </>
  )
}


export default App
