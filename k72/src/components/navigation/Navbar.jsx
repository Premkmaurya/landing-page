import React,{useRef,useContext} from 'react'
import { NavbarContext } from "../../context/NavContext";

function Navbar() {
	const hoverRef = useRef(null)
	const lineRef = useRef(null)
	const lineFirRef = useRef(null)
	const lineSecRef = useRef(null)
	const hamburgerRef = useRef(null)
	
   const { open, setOpen } = useContext(NavbarContext)


	return (
		<>
		 <div className="flex fixed top-0 z-20 w-full items-start
			justify-between">
		 <div className="p-3">
		 	<div className="w-[5rem] md:w-[7rem]">
		 	<svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
         </svg>
		 </div>
		 </div>
         <div
            onMouseEnter={()=>{
            	hoverRef.current.style.height = "100%"
            	lineFirRef.current.style.backgroundColor = 'black'
            	lineSecRef.current.style.backgroundColor = 'black'
            }} 
            onMouseLeave={()=>{
            	lineFirRef.current.style.backgroundColor = 'white'
            	lineSecRef.current.style.backgroundColor = 'white'
            	hoverRef.current.style.height = "0%"
            }}
            onClick={()=>{
            	setOpen(true)
            }}
         	className="w-[30vw] h-[5vh] md:w-[16vw] md:h-[7vh] relative bg-black flex items-center justify-center">
         	<div ref={hoverRef} className="bg-[#D3FD50] transition-all absolute top-0 w-full h-0"></div>
         	<div ref={hamburgerRef} className="flex relative z-3 w-[60%] flex-col items-end gap-1 text-white justify-end">   		
         		<div ref={lineRef} className="flex flex-col gap-1 items-end">
         			<div ref={lineFirRef} className="transition-all bg-white h-[0.1rem] w-[10vw] md:w-[5vw] "></div>
         	    <div ref={lineSecRef} className="transition-all bg-white h-[0.1rem] w-[6vw] md:w-[2vw] "></div>
         		</div>
         	</div>
         </div>
		 </div>
		 
		</>
	)
}

export default Navbar
