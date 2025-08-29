import React from 'react'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeCenterText from '../components/home/HomeCenterText'
import Video from '../components/home/Video'

function Home() {
	return (
		<>
		<div className="w-screen h-screen fixed">
		  <Video />
		</div>
		<div className='w-screen h-screen relative text-white bg-transparent flex flex-col items-center justify-between'>
			<HomeHeroText />
			<HomeCenterText />
			<HomeBottomText />
		</div>
		</>
	)
}

export default Home