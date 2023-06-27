import Image from 'next/image'

function MaintainSection({onCloseSlide}) {
  const classNameH2 = 'text-cyan-950 text-2xl ml-3'
  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }

  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 left-0 bottom-0 grid grid-cols-2 overflow-hidden '>
    {/* Tolls Module(Left) */}
      <div style={{backgroundImage: `url(/assets/images/Maintainbg.png)`, backgroundRepeat: 'none', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      {/* Close Button */}
        <div>
          <button onClick={closeSlide} className='absolute text-white right-0 mr-5 mt-5'>Close</button>
        </div>

        <div>
          <h1 className='text-cyan-950 bg-emerald-300 absolute text-4xl font-bold uppercase ml-[5rem] h-fit p-4 text-center mt-5'>mantenimiento y operación</h1>
        </div>
      </div>

      {/* Tolls Module(Right) */}
      <div className="grid grid-rows-2">
        <div className='w-full h-full ml-8'>
          <div className='mt-14'>
            <h1 className='text-white text-3xl text-left font-semibold'>Nuestra Solución: </h1>
          </div>
          <div className='flex flex-row justify-start items-center mt-5'>
            <Image src="/assets/images/NegativeTick.png" alt='tick' width={50} height={50} quality={100} /> 
            <h2 className='text-white text-center text-2xl ml-4'>Contrato por el 100% de las actividades de O&M.</h2>
          </div>
          <div className='flex flex-row justify-start items-center mt-5'>
            <Image src="/assets/images/PositiveTick.png" alt='tick' width={50} height={50} quality={100} /> 
            <h2 className='text-white text-center text-2xl ml-4'>Personal propio con dedicación completa al proyecto.</h2>
          </div>
          <div className='flex flex-row justify-start items-center mt-5'>
            <Image src="/assets/images/NegativeTick.png" alt='tick' width={50} height={50} quality={100} /> 
            <h2 className='text-white text-center text-2xl ml-4'>Plataforma web para entrega de informes e indicadores.</h2>
          </div>
        </div>
        <div className='bg-slate-100'>
          <div className='grid grid-cols-2 mt-12 mx-10 place-content-center w-full h-full'>
            <div className='flex items-center mr-10 justif-center'>
              <h1 className='text-cyan-950 font-bold text-6xl'>+1000Km</h1>
              <h2 className={classNameH2}>De vía concesionada con O&M</h2>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='text-cyan-950 font-bold text-6xl'>32</h1>
              <h2 className={classNameH2}>Peajes en operación</h2>
            </div>
          </div>

          <div className='absolute bg-emerald-300 bottom-[25rem] p-5 ml-5 rounded-br-[2rem]'>
            <h1 className='text-cyan-950 text-3xl uppercase font-bold'>más de 15 años de experiencia</h1>
          </div>
        </div>
      </div>
    </div>



  )
}

export default MaintainSection