import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Pages/HomePage/HomePage'
import Login from './Component/Pages/Login/Login'

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
