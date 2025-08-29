import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navigation/Navbar'
// import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis)
  // })

  return (
    <div className="text-black w-screen h-screen">
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App