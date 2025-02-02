import { Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layout/MainLayout'

function App() {
  return (
   <>
   <Routes>
    <Route index path='/' element={<MainLayout/>}/>
   </Routes>
   </>
  )
}

export default App
