import Image from 'next/image'
import TollsLogos from '../Containers/TollsLogos';

function PeajeSlide({ onCloseSlide }) {

  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }

  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 left-0 bottom-0 grid grid-cols-2 overflow-hidden'>
    {/* Tolls Module(Left) */}
      <div>
      {/* Close Button */}
        <div>
          <button onClick={closeSlide} className='absolute text-white'>Close</button>
        </div>

      {/* U TOLL Card */}
        <div className='bg-cyan-950 w-[18rem] h-[20rem] absolute bottom-5 left-10 p-5 gap-1 rounded-br-[70px] border border-cyan-800 shadow-xl bg-opacity-80'>
          <h1 className='text-emerald-300 text-4xl font-bold mb-3'>U TOLL</h1>
          <span className='text-emerald-300 pt-2'>
            Software propio para la
            gestión, control de tráfico
            y recaudo en peajes.
            Soporta diferentes modelos
            de operación y tecnología,
            así como las exigencias
            y normatividades emitidas
            por las entidades del estado.
          </span>
        </div>

      {/* Background Image */}
        <Image src='/assets/images/Peajebg.png' alt='Peaje Imagen' width={2000} height={2000} style={{objectFit: "cover", objectPosition: "center"}} quality={100} priority={true}/>
      </div>

    {/* Tolls Module(Right) */}
      <div className="grid grid-rows-2">
        <div className='nested-grid'>
          <TollsLogos />
        </div>
        <div>
          <h1>Row 2</h1>
        </div>
      </div>
    </div>
  )
}

export default PeajeSlide