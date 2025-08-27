import React from 'react'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'
import Video from '../components/home/Video'

function Home() {
	return (
		<>
		<div className="bg-[#111] w-screen h-screen fixed">
		  <Video />
		</div>
		<div className='w-screen h-screen relative'>
			<HomeHeroText />
			<HomeBottomText />
		</div>
		</>
	)
}

export default Home