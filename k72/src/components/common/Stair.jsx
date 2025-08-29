import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

function Stair(props) {
    const stairDivRef = useRef(null)
    const stairRef = useRef(null)

    useGSAP(()=>{
    	const tl = gsap.timeline();
    	// const stairs = gsap.utils.toArray(stairRef.current);
    	tl.to(stairDivRef.current,{
    		display:'block'
    	})
    	tl.from(".stair",{
    		height:0,
    		stagger:{
    			amount:-0.25
    		}
    	})
    	tl.to(".stair",{
    		y:"100%",
    		stagger:{
    			amount:-0.25
    		}
    	})
    	tl.to(stairDivRef.current,{
    		display:"none"
    	})
    	tl.to(".stair",{
    		y:"0%"
    	})
    })
    console.log(props.children)

	return (
		<>
		<div ref={stairDivRef} className="h-screen w-screen fixed z-20 top-0">
				<div className="h-full w-full flex">
					<div ref={stairRef} className="stair h-full w-1/5 bg-black"></div>
					<div ref={stairRef} className="stair h-full w-1/5 bg-black"></div>
					<div ref={stairRef} className="stair h-full w-1/5 bg-black"></div>
					<div ref={stairRef} className="stair h-full w-1/5 bg-black"></div>
					<div ref={stairRef} className="stair h-full w-1/5 bg-black"></div>
				</div>
		</div>
		{props.children}
		</>
	)
}

export default Stair