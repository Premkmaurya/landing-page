import { useRef, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import img from "./public/bugatti.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const App = () => {
  const [activeBtn, setActiveBtn] = useState("01");

  const carRef = useRef(null);
  const infoRef = useRef(null);
  const navRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(carRef.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      onComplete: () => {
        leftPanelRef.current.classList.add("bg-blue-500");
      },
    })
      .from(".char", {
        duration: 1,
        opacity: 0,
        y: 40,
        stagger: {
          amount: 0.4,
        },
        ease: "power4.out",
      })
      .from(navRef.current, {
        opacity: 0,
        duration: 0.3,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      })
      .from(".info", {
        opacity: 0,
        duration: 0.7,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      });
  });

  const navHandler = (btn) => {
    setActiveBtn(btn);
    gsap.to(".info", {
      opacity: 0,
      duration: 0.7,
      stagger: {
        amount: 0.2,
      },
      ease: "power4.out",
    });
    const tl = gsap.timeline({
      duration: 1,
      ease: "power4.out",
    });
    tl.to("char",{
      opacity:0,
      y:-40,
      stagger:{
        amount:0.2
      }
    })
    tl.to(carRef.current, {
      x: -500,
      opacity: 0,
    });
    tl.to(
      leftPanelRef.current,
      {
        width: "0vw",
        delay: -0.76,
        transform: "translateX(-45vw)",
      },
      "<"
    );
  };

  return (
    <div className="relative overflow-hidden bg-black flex h-screen w-screen">
      {/* left side */}
      <div
        ref={leftPanelRef}
        className="bg-black w-[45vw] h-[100vh] gap-4 transition-all duration-1000"
      ></div>
      {/* right side */}
      <div ref={rightPanelRef} className="relative w-[55vw] h-[100vh] p-4">
        {/* info */}
        <div className="absolute bottom-10 left-8 right-2 flex gap-20 z-10">
          <div className="info flex flex-col items-end">
            <span className="text-blue-500">Top Speed</span>
            <span className="text-2xl text-white font-bold">420 km/h</span>
          </div>
          <div className="info flex flex-col items-end">
            <span className="text-blue-500">0-100km/h</span>
            <span className="text-2xl text-white font-bold">2.4 seconds</span>
          </div>
          <div className="info flex flex-col items-end">
            <span className="text-blue-500">HP(Horse Power)</span>
            <span className="text-2xl text-white font-bold">1479 hp</span>
          </div>
        </div>
      </div>

      {/* social media links */}
      <div className="absolute left-5 top-3 flex flex-col h-full items-center justify-center gap-9">
        <div className="bg-white w-1 rounded-lg h-[60%]"></div>

        <div className="flex flex-col gap-6 text-white">
          <FaInstagram size={22} className="cursor-pointer" />
          <FaGithub size={22} className="cursor-pointer" />
          <FaLinkedin size={22} className="cursor-pointer" />
        </div>
      </div>
      {/* navigation */}
      <div className="absolute right-10 flex flex-col h-full items-end justify-center">
        <div
          ref={navRef}
          className="flex flex-col items-end justify-end text-white gap-8 p-4"
        >
          <div
            onClick={() => navHandler("01")}
            className={`text-white/30 hover:text-white flex justify-center items-center w-9 h-9 rounded-full border-1 border-white/30 hover:border-white hover:border-2 transition-all ${
              activeBtn === "01" ? "border-2 text-white border-white" : ""
            } `}
          >
            01
          </div>
          <div
            onClick={() => navHandler("02")}
            className={`text-white/30 hover:text-white flex justify-center items-center w-9 h-9 rounded-full border-1 border-white/30 hover:border-white hover:border-2 transition-all ${
              activeBtn === "02" ? "border-2 text-white border-white" : ""
            } `}
          >
            02
          </div>
          <div
            onClick={()=> navHandler("03")}
            className={`text-white/30 hover:text-white flex justify-center items-center w-9 h-9 rounded-full border-1 border-white/30 hover:border-white hover:border-2 transition-all ${
              activeBtn === "03" ? "border-2 text-white border-white" : ""
            } `}
          >
            03
          </div>
        </div>
      </div>
      {/* race text */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <h1 className="text-white text-[12rem] font-bold uppercase flex">
          <span className="char">R</span>
          <span className="char">A</span>
          <span className="char">C</span>
          <span className="char">E</span>
        </h1>
      </div>
      {/* car image */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-1">
        <div ref={carRef} className="w-[80vw] h-[80vh]">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
