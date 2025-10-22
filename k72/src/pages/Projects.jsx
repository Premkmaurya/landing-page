import React,{useEffect} from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from 'lenis'

function Projects() {
// 	useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1,
  //     smoothWheel: true,   // 👈 scroll-wheel ke liye zaroori
  //   })

  //   function raf(time) {
  //     lenis.raf(time)      // 👈 yeh call karna compulsory hai
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)

  //   lenis.on('scroll', (e) => {
  //     console.log(e)
  //   })
  // }, [])
    const img = [
         {
         	image1:"https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg"
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
    	     image2:"https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg"
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg"
    	},
    	{
    		image1:"https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
    	    image2:"https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
    	},
    ]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
    	gsap.from(".card",{
    		height:"70px",
    		stagger:{
    			amount:0.3
    		},
    		scrollTrigger:{
    			trigger:".cardParent",
    			start:"top 100%",
    			end:"top -250%",
    			scrub:true
    		}
    	})
    })



	return (
		<div>
		   <div className="pt-[45vh]">
		   	<h1 className="font-[font-v-2] uppercase text-[5rem] lg:text-[9rem] relative">Projets<sup className="text-[1.4rem] lg:text-[2rem] absolute top-10 lg:top-12">16</sup></h1>
		   </div>
		   <div>
		   	 <div className="cardParent">
		   	 {img.map(function (e,i) {
            	return <div key={i} className="card w-full h-[350px] px-3 mb-4 flex flex-col lg:flex-row gap-2"> 
		   	 		<ProjectCard image={e} />
		   	 	</div>
		   	 	})}
		   	 </div>
		   </div>
		</div>
	)
}

export default Projects