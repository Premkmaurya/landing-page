import React,{useEffect} from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navigation/Navbar'
import Lenis from 'lenis'
import FullScreenNav from './components/navigation/FullScreenNav'

function App() {
 useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,   // 👈 scroll-wheel ke liye zaroori
    })

    function raf(time) {
      lenis.raf(time)      // 👈 yeh call karna compulsory hai
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', (e) => {
      console.log(e)
    })
  }, [])
  return (
    <div className="text-black w-screen h-screen">
      <Navbar />
      <FullScreenNav />
      <AppRoutes />
    </div>
  )
}

export default App