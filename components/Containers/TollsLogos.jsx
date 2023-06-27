import Image from 'next/image'

const LogosData = [
  {
    id: 1,
    description: 'Diseño de la solución',
    img: '/assets/images/designTolls.png',
  },
  {
    id: 2,
    description: 'Instalación de hardware',
    img: '/assets/images/hardwareTolls.png',
  },
  {
    id: 3,
    description: 'Suministro de software UToll',
    img: '/assets/images/softwareTolls.png',
  },
  {
    id: 4,
    description: 'Puesta en marcha',
    img: '/assets/images/marchaTolls.png',
  },
]

function TollsLogos() {
  const logos = LogosData.map((logo) => (
      <div key={logo.id} className='flex justify-center items-center w-full h-full flex-wrap flex-col '>
        <div className='flex justify-center items-center 2xl:w-full md:w-[8rem] md:z-40 '>
          <Image src={logo.img} width={90} height={90} alt={logo.description} />
        </div>
        <div className='flex justify-center items-center h-fit mt-5'>
          <div className='flex justify-center items-center h-fit'>
            <h1 className='text-emerald-300 text-4xl mr-2 font-bold'>{logo.id + '.'}</h1>
          </div>
          <h1 className='text-white text-center font-semibold text-2xl z-30 pointer-events-none line align-bottom mt-2'>
            {logo.description}
          </h1>
        </div>
      </div>
  ))
  return (
    logos
  )
}

export default TollsLogos