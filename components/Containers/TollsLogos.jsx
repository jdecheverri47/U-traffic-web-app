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
      <div key={logo.id} className='flex justify-center items-center w-full h-full'>
        <div className='flex justify-center items-center'>
          <Image src={logo.img} width={80} height={80} alt={logo.description} />
        </div>
        {/* <div className='flex justify-center items-center h-fit'>
          <div className='flex justify-center items-center h-fit'>
            <h1>{logo.id + '.'}</h1>
          </div>
          <h1 className='text-white text-center font-semibold text-2xl z-30 pointer-events-none items-center justify-center'>
            {logo.description}
          </h1>
        </div> */}
      </div>
  ))
  return (
    logos
  )
}

export default TollsLogos