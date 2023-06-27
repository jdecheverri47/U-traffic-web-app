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
      <h1 className="text-[14rem] text-center text-emerald-300 font-extrabold min-w-fit title" style={textStyle} >
        U Traffic
      </h1>

      <h2 className="text-white font-semibold text-5xl mb-8 subtitle" style={textStyle} >
        SOMOS EL ONE STOP SHOP
        <br/>
          DE LAS CONCESIONES VIALES
      </h2>

      <h3 className=" text-emerald-300 font-semibold text-3xl mb-8 slogan" style={textStyle} >
        Solución integral para peajes, <br/>
        ITS y operación de concesiones viales.
      </h3>
    </div>
  )
}

export default PresentationText