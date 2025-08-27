import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
    <div className='font-[font-v-2] uppercse text-[12vw] pt-5 leading-[9.5vw] font-extralight text-center'>
      <div>
        L'étincelle
      </div>
      <div className='flex items-center justify-center'>
        qui
        <div className='h-[10vh] rounded-xl overflow-hidden'>
          <Video />
          </div>
        génère
      </div>
      <div>
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText