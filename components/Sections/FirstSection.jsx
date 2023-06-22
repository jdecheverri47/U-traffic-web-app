'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import MainVideo from '@/components/Individuals/MainVideo'
import TextSectionOne from '@/components/Individuals/TextSectionOne'

function FirstSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.config({
      syncInterval: 999999999,
      limitCallbacks: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    });

    const section = sectionRef.current;
    const video = videoRef.current;

    let ctx = gsap.context(() => {
      gsap.to(section, {
        yPercent: 20,
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      })
      gsap.to(video, {
        scale: 1.3,
        ease: "none",
        autoAlpha: 0,
        scrollTrigger: {
          trigger: section,
          start: "center top",
          end: "bottom top",
          scrub: 2,
          // markers: true,
        },
      })
    }, section)
    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <section className='w-screen relative flex justify-center items-center overflow-hidden' ref={sectionRef} >
      <div className='relative w-full h-screen overflow-hidden' ref={videoRef}>
        <MainVideo />
      </div>


        <TextSectionOne />
    </section>
  )
}

export default FirstSection