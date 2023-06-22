import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)


function TextSectionOne() {
  const nameRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const backgroundRef = useRef(null)

  const textStyle = {textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}

  useEffect(() => {

    const name = nameRef.current
    const second = secondRef.current
    const third = thirdRef.current
    const background = backgroundRef.current

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(name, {
        xPercent: -100, 
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })
      tl.to(second, {
        xPercent: 100, 
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })
      tl.to(third, {
        xPercent: -100, 
        duration: 2,
        autoAlpha: 0,
        scrub: 1,
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: background,
        start: "top top",
        end: "+=800",
        scrub: 1,
        // markers: true,
        anticipatePin: 1,
      })

      // gsap.to(background,
      //   {
      //   y: '-10',
      //   opacity: 0,
      //   autoAlpha: 0,
      //   scrollTrigger: {
      //     trigger: background,
      //     start: 'center 20%',
      //     end: 'bottom 20%',
      //     scrub: true,
      //     // markers: true
      //   }
      // })
    }, background)
    return () => {
      ctx.revert()
    }


  }, [])
  return (
      <div className='overflow-hidden min-w-fit px-[100vw] absolute py-5 z-10 text-center whitespace-nowrap backdrop-filter bg-cyan-950 backdrop-brightness-100' style={{backgroundColor: 'rgba(8, 51, 68, 0.75)'}} ref={backgroundRef} >
        <h1 className="text-[12rem] text-center text-emerald-300 font-extrabold min-w-fit" style={textStyle} ref={nameRef} >
          U TRAFFIC
        </h1>

        <h2 className="text-white font-semibold text-5xl mb-8" style={textStyle} ref={secondRef} >
          SOMOS EL ONE STOP SHOP
          <br/>
            DE LAS CONCESIONES VIALES
        </h2>

        <h3 className=" text-emerald-300 font-semibold text-3xl mb-8" style={textStyle} ref={thirdRef}>
          Solución integral para peajes, <br/>
          ITS y operación de concesiones viales.
        </h3>
      </div>
      </div>
  )
}

export default TextSectionOne