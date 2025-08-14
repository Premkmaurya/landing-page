import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Nav() {
  const contentRef = useRef(null);
  const sectionFirRef = useRef(null);
  useGSAP(() => {
    const spans = contentRef.current.querySelectorAll("span");
    const tl = gsap.timeline();
    tl.from(sectionFirRef.current, {
      y: -700,
      duration: 0.6,
      delay: 2,
      ease: "power2.out",
    });
    tl.from(spans, {
      y: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out",
    });
  });
  return (
    <div ref={sectionFirRef} className=" bg-black">
      <nav className="px-9 py-5 w-full h-[12vh] text-white bg-black flex items-center justify-between">
        <h1 className="capitalize text-md">the growth accelerator</h1>
        <div className="flex items-center gap-[6px]">
          {["home", "work", "about", "services", "contact"].map((item, idx) => {
            return (
              <a key={idx} className="capitalize text-sm">
                {item}
              </a>
            );
          })}
        </div>
        <button className="flex items-center justify-center gap-1 capitalize text-xs">
          Let's talk
          <GoArrowUpRight color="white" size={15} />
        </button>
      </nav>
      <section className="bg-black flex flex-col justify-between text-white h-[78vh]">
        <h1
          ref={contentRef}
          className="sticky bottom-3 inline-block uppercase px-[1.2rem] leading-[13rem] mt-[2rem] font-bold text-[17rem]"
        >
          {["r", "e", "j", "o", "u", "i", "c", "e"].map((letter, idx) => (
            <span key={idx} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <div className="sticky bottom-0 flex justify-between items-center px-[2rem] py-[2rem] items-end">
          <div className="flex gap-[3rem]">
            <h5 className="text-md w-[13vw]">Strategy, Design, Performance.</h5>
            <h5 className="text-md w-[13vw]">Global Creative & Technology Agency.</h5>
          </div>
          <div className="flex items-center justify-center rounded-full border-1 border-gray-500 w-[3rem] h-[3rem] ">
            <FaArrowDown color={"#d6d6dbff"} size={"0.8rem"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav;
