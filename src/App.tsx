
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Pages/Homepage'
import Login from './Component/Pages/Login'

function App() {
  return (
  <>
   <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
   </Routes>
  
  </>
  )
}


export default App
