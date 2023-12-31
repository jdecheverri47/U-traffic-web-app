import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function PresentationText() {
  const textStyle = {textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to('.slogan', {
        xPercent: -100,
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })
      tl.to('.subtitle', {
        xPercent: 100,
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })
      tl.to('.title', {
        xPercent: -100,
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })
      tl.to(bg, {
        yPercent: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: bg,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          // markers: true,
        }
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: bg,
        start: "top top",
        end: "+=500",
        scrub: 1,
        // markers: true,
        anticipatePin: 1,
      })
    }, [bg])
  }, [])
  return (
    <div className='overflow-hidden min-w-fit px-[100vw] absolute py-5 z-10 text-center whitespace-nowrap bg-opacity-75 bg-cyan-950' ref={bgRef}>
      {/* <div className="w-[2rem] h-[2rem] bg-white rounded-full absolute top-[5rem] ml-[3.5rem] z-40 lg:top-[3.5rem] lg:ml-[2.5rem] lg:w-[1.5rem] lg:h-[1.5rem] 2xl:w-[5rem] 2xl:h-[5rem]" /> */}
      <h1 className="xl:text-[14rem] lg:text-[10rem] text-center text-emerald-300 font-extrabold min-w-fit title" style={textStyle} >
        U Traffic
      </h1>

      <h2 className="text-white font-semibold text-5xl mb-8 subtitle lg:text-3xl" style={textStyle} >
        SOMOS EL ONE STOP SHOP
        <br/>
          DE LAS CONCESIONES VIALES
      </h2>

      <h3 className=" text-emerald-300 font-semibold text-3xl lg:text-2xl mb-8 slogan" style={textStyle} >
        Solución integral para peajes, <br/>
        ITS y operación de concesiones viales.
      </h3>
    </div>
  )
}

export default PresentationText