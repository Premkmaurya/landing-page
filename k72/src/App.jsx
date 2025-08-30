import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navigation/Navbar'
// import { ReactLenis, useLenis } from 'lenis/react'
import FullScreenNav from './components/navigation/FullScreenNav'

function App() {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis)
  // })

  return (
    <div className="text-black w-screen h-screen">
      <Navbar />
      <FullScreenNav />
      {/*<AppRoutes />*/}
    </div>
  )
}

export default App