import React from 'react'


function ProjectCrd({image}) {
	return (
	<>
		<div className="w-1/2 group relative transition-all hover:rounded-[3rem] overflow-hidden h-full">
		   	<img className="w-full transition-all ease-in duration-200 group-hover:scale-105 h-full object-cover" src={image.image1} />
            <div className="opacity-0 group-hover:opacity-100 absolute transition-all ease-in duration-200 border-[0.15rem] px-5 border-white top-[50%] left-3 text-center flex items-center justify-center  text-white rounded-4xl">
                <h2 className="font-[font-v-2] uppercase text-[3.3rem] tracking-tight leading-[6vw]">voir le Projets</h2>
            </div>
		</div>
		<div className="w-1/2 group relative transition-all hover:rounded-[3rem] overflow-hidden h-full">
		   	<img className="w-full transition-all ease-in duration-200 group-hover:scale-105 h-full object-cover" src={image.image2} />
            <div className="opacity-0 group-hover:opacity-100 absolute transition-all ease-in duration-200 border-[0.15rem] px-5 border-white top-[50%] left-3 text-center flex items-center justify-center  text-white rounded-4xl">
                <h2 className="font-[font-v-2] uppercase text-[3.3rem] tracking-tight leading-[6vw]">voir le Projets</h2>
            </div>
		</div>
	</>
	)
}

export default ProjectCrd