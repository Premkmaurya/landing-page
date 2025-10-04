import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Nav from "./components/Nav";
import Video from "./components/Video";


const App = () => {
  const coverRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const headings = coverRef.current.querySelectorAll("h3");
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      },
    });
    tl.from(headings, {
      opacity: 0,
      x: 40,
    });
    tl.to(headings, {
      opacity: 0,
      x: -40,
    });
    tl.set(coverRef.current, {
      opacity: 0,
      display: "none",
    });
    tl.set(contentRef.current, {
      display: "block",
    });
  }, []);
  return (
    <div className="bg-black">
      <div
        ref={coverRef}
        className="w-screen z-11 overflow-hidden absolute top-0 left-0 h-screen flex items-center justify-center gap-2 bg-black text-white"
      >
        <h3>Tommorrow,</h3>
        <h3>Brand,</h3>
        <h3>
          Today.<sup className="text-md">®</sup>
        </h3>
      </div>
      <div ref={contentRef} className="hidden">
        <Nav />
        <Video />
      </div>
    </div>
  );
};

export default App;
