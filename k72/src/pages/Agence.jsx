import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


function Agence() {
  const imgRef = useRef(null)
  const imgDivRef = useRef(null);
  

  gsap.registerPlugin(ScrollTrigger);

  const imgSrc = [
    "https://k72.ca/uploads/teamMembers/PLP2_640x960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    // "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  ]
  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {  // 👈 lowercase s
        trigger: imgDivRef.current,
        start: "top 20%",
        end: "top -125%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        antiPathPin:1,
        invalidateOnRefresh:true,
        onUpdate:function (e) {
          const imgIndex = Math.floor(e.progress*imgSrc.length)
          if(e.progress < 1){
            imgRef.current.src = imgSrc[imgIndex]
          } else{
            imgRef.current.src = imgSrc[imgSrc.length - 1]          }
        }
      },
    });
  });

  return (
    <div>
      <div className="overflow-hidden">
        <div>
          <div
            ref={imgDivRef}
            className="absolute z-2 overflow-hidden h-[38vh] w-[14vw] top-[12vw] left-[30vw] rounded-2xl"
          >
            <img
              ref={imgRef}
              className="w-full h-full object-cover"
              src="https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg"
              alt=""
            />
          </div>
          <div className="mt-[55vh]">
            <h1 className="relative z-3 bg-transparent text-[18vw] uppercase text-center font-[font-v] leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
            <div className="pl-[50%] w-[96vw] mt-20">
              <p className="text-3xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Notre curiosité nourrit notre créativité. On reste humbles et on
                dit non aux gros egos, même le vôtre. Une marque est vivante.
                Elle a des valeurs, une personnalité, une histoire. Si on oublie
                ça, on peut faire de bons chiffres à court terme, mais on la tue
                à long terme. C’est pour ça qu’on s’engage à donner de la
                perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Agence;
