import Image from 'next/image'
import CloseButton from '../UI/CloseButton'

function MaintainSection({onCloseSlide}) {
  const classNameH2 = 'text-cyan-950 text-2xl w-[6rem] ml-5'
  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }

  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 left-0 bottom-0 grid grid-cols-2 overflow-hidden cursor-auto'>
    {/* Tolls Module(Left) */}
      <div style={{backgroundImage: `url(/assets/images/Maintainbg.png)`, backgroundRepeat: 'none', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      {/* Close Button */}
        <CloseButton closeSlide={closeSlide}/>

        <div className='w-full flex justify-center'>
          <h1 className='text-cyan-950 bg-emerald-300 absolute text-4xl font-bold uppercase h-fit p-4 text-center mt-5'>mantenimiento y operación</h1>
        </div>
      </div>

      {/* Tolls Module(Right) */}
      <div className="grid grid-rows-2">
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div>
            <h1 className='text-white text-3xl text-left font-semibold'>Nuestra Solución: </h1>
          </div>
          <div className='flex flex-row justify-center items-center mt-5 w-full'>
            <Image src="/assets/images/NegativeTick.png" alt='tick' width={50} height={50} quality={100} />
            <h2 className='text-white text-left text-3xl ml-4 w-[30rem]'>Contrato por el 100% de las actividades de O&M.</h2>
          </div>
          <div className='flex flex-row justify-center items-center mt-5 w-full'>
            <Image src="/assets/images/PositiveTick.png" alt='tick' width={50} height={50} quality={100} />
            <h2 className='text-white text-left text-3xl ml-4 w-[30rem]'>Personal propio con dedicación completa al proyecto.</h2>
          </div>
          <div className='flex flex-row justify-center items-center mt-5 w-full'>
            <Image src="/assets/images/NegativeTick.png" alt='tick' width={50} height={50} quality={100} />
            <h2 className='text-white text-left text-3xl ml-4 w-[30rem]'>Plataforma web para entrega de informes e indicadores.</h2>
          </div>
        </div>
        <div className='bg-slate-100'>
          <div className='flex flex-col gap-6 items-center justify-center w-full h-full'>
            <div className='flex items-center justify-center w-full'>
              <h1 className='text-cyan-950 font-bold text-8xl w-fit h-fit'>+1000Km</h1>
              <h2 className={classNameH2}>De vía concesionada con O&M</h2>
            </div>
            <div className='flex items-center justify-center w-full'>
              <h1 className='text-cyan-950 font-bold text-8xl'>32</h1>
              <h2 className={classNameH2}>Peajes en operación</h2>
            </div>
          </div>

          <div className='absolute bg-emerald-300 bottom-[25rem]  2xl:bottom-[28.2rem] p-5 ml-5 rounded-br-[2rem]'>
            <h1 className='text-cyan-950 text-3xl uppercase font-bold'>más de 15 años de experiencia</h1>
          </div>
        </div>
      </div>
    </div>



  )
}

export default MaintainSection