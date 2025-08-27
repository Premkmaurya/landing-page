import React from 'react'
import Home from '../pages/Home'
import Agence from '../pages/Agence'
import Projects from '../pages/Projects'
import {Route,Routes} from "react-router-dom"

function AppRoutes() {
	return (
		<div>
		  <Routes>
		  	<Route path="/" element={<Home />} />
		  	<Route path="/agence" element={<Agence />} />
		  	<Route path="/projects" element={<Projects />} />
		  </Routes>
		</div>
	)
}

export default AppRoutes