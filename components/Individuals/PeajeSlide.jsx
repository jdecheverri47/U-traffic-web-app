import Image from 'next/image'
import TollsLogos from '../Containers/TollsLogos';
import CloseButton from '../UI /CloseButton';

function PeajeSlide({ onCloseSlide }) {

  const classNameH2 = 'text-cyan-950 xl:text-2xl ml-3 md:text-xl'

  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }

  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 left-0 bottom-0 grid grid-cols-2 overflow-hidden cursor-auto'>
    {/* Tolls Module(Left) */}
      <div className='tolls-slide'>
      {/* Close Button */}
        <CloseButton closeSlide={closeSlide}/>

      {/* U TOLL Card */}
        <div className='bg-cyan-950 w-[18rem] xl:h-[20rem] md:w-[15rem] md:h-[18rem] absolute bottom-[5rem] left-[5rem] p-5 gap-1 rounded-br-[70px] border border-cyan-800 shadow-xl bg-opacity-80'>
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

        <div>
          <h1 className='text-cyan-950 bg-emerald-300 absolute xl:text-6xl md:text-5xl font-bold uppercase ml-[5rem] h-fit p-3 text-center'>P <br/>e <br/>a <br/>j <br/>e <br /> s</h1>
        </div>
      </div>

      {/* Tolls Module(Right) */}
      <div className="grid grid-rows-2">
        <div className='nested-grid md:p-3'>
          <TollsLogos />
        </div>
        <div className='bg-slate-100'>
          <h1 className='uppercase text-6xl text-cyan-950 font-bold ml-10 mt-14 md:text-5xl'>Experiencia</h1>
          <h2 className='text-cyan-950 text-4xl ml-10 mt-2 md:text-3xl'>Integrador para soluciones <strong className='uppercase'>ip rev</strong></h2>

          <div className='grid xl:grid-cols-3 xl:mt-12 mx-10 md:grid-rows-3 md:mt-8 '>
            <div className='flex items-center'>
              <h1 className='text-cyan-950 font-bold text-6xl'>36</h1>
              <h2 className={classNameH2}>Carriles <br/> manuales</h2>
            </div>
            <div className='flex items-center'>
              <h1 className='text-cyan-950 font-bold text-6xl'>14</h1>
              <h2 className={classNameH2}>Telepeajes en el extranjero</h2>
            </div>
            <div className='flex items-center'>
              <h1 className='text-cyan-950 font-bold text-6xl'>32</h1>
              <h2 className={classNameH2}>Carriles de telepeaje en Colombia</h2>
            </div>
          </div>

          <div className='absolute bg-emerald-300 2xl:bottom-[28rem] xl:p-5 ml-5 rounded-br-[2rem] xl:bottom-[24rem] md:p-3 md:bottom-[21.5rem]'>
            <h1 className='text-cyan-950 xl:text-3xl uppercase font-bold md:text-xl'>más de 15 años de experiencia</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeajeSlide