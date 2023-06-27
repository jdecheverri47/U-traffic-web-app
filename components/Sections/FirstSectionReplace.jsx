'use client'

import MainVideo from "../Individuals/MainVideo"
import PresentationText from "../Individuals/PresentationText"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


function FirstSectionReplace() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    let ctx = gsap.context(() => {
      gsap.to('.main-video', {
        // yPercent: -30,
        scale: 1.3,
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
          scrub: 2,
          // markers: true,
        },
      })
    }, [section])
    return () => {
      ctx.revert();
    }
  }, [])
  return (
      <section className='w-screen relative flex justify-center items-center overflow-hidden shadow-2xl' id="first-section" ref={sectionRef} >
        <div className='relative w-full h-screen overflow-hidden aspect-video main-video'>
          <MainVideo />
        </div>
        <PresentationText />
      </section>
  )
}

export default FirstSectionReplace