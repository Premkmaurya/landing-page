import React,{useEffect} from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

function App() {

  return (
    <div className="text-black w-screen h-screen">
      <Navbar />
      <FullScreenNav />
      <AppRoutes />
    </div>
  )
}

export default App