import Image from 'next/image'
import CardVideo from '../Individuals/CardVideo';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PeajeSlide from '../Individuals/Slides';

function Lista({ datos, sectionRefProp }) {
  const style = 'transform transition duration-1000 hover:scale-105 hover:transition hover:duration-1000 ease-in-out flex flex-col justify-center items-center align-center relative w-full h-full min-w-[200px] min-h-[50vh] overflow-hidden';
  const svgRef = useRef(null);
  const textStyle = {textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}

  const [showSlide, setShowSlide] = useState(false);

  const handleClick = () => {
    setShowSlide(!showSlide);
  };


  useEffect(() => {
    const svg = svgRef.current;
    const section = sectionRefProp.current;
    let ctx;

    ctx = gsap.context(() => {
      console.log("gsap.context callback called");
      gsap.from(svg, {
        x: -100,
        x: -100,
        opacity: 0,
        ease: "power3.inOut",
        onComplete: handleState,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "top 30%",
          scrub: true,
          // markers: true,
        },
      });
    }, section);

    function handleState(){
      if(ctx !== undefined){
        ctx.revert();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRefProp.current]);

  const cards = datos.map((item) => {
    return (
      <div key={item.key} className={`flex flex-col justify-center items-center align-center ${item.color} min-w-[200px] min-h-[50vh] overflow-hidden`} >

      {item.key === 1 && showSlide ? <PeajeSlide onCloseSlide={handleClick}/> : null }

        <div className={style} ref={svgRef} onClick={handleClick}>
          <Image src={item.img} width={225} alt={item.text} className='z-30 shadow-outline pointer-events-none'/>
          <h1 className='text-white text-center font-semibold text-2xl mt-5 z-30 pointer-events-none' style={textStyle}>
            {item.text}
          </h1>

          <CardVideo video={item.video} />


        </div>
      </div>
    )})

  return (
    cards
  )
};

export default Lista;
