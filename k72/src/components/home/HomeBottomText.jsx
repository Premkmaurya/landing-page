import React from 'react'
import {Link} from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font-v-2] py-2 uppercase text-[4.8vw] flex items-center gap-5 text-center'>
      <Link className="border-2 border-white rounded-full px-4 font-extralight hover:text-[#D3FD50] hover:border-[#D3FD50]" to="/projects">Projects</Link>
      <Link className="border-2 border-white rounded-full px-4 font-extralight hover:text-[#D3FD50] hover:border-[#D3FD50]" to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottomText