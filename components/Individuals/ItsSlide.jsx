import ItsCards from "../Containers/ItsCards";

function ItsSlide({ onCloseSlide }) {

  const classNameH2 = 'text-cyan-950 text-3xl ml-3 text-center'
  const classContainer = 'flex flex-col justify-center'

  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }

  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 overflow-hidden flex justify-center items-center container-its top-0 left-0'>
      <div>
      {/* Close Button */}
        <div>
          <button onClick={closeSlide} className='absolute text-white right-0 top-0 mr-5 mt-5'>Close</button>
        </div>

        <div className="h-[80vh] w-[90vw] absolute bottom-[11%] left-[5%] bg-white rounded-xl bg-opacity-80 shadow-2xl grid grid-cols-2">
          <div className="relative mt-10 ml-10">
            <div>
              <h1 className="text-cyan-950 font-bold text-5xl">ITS</h1>
              <h2 className="text-cyan-950 text-4xl mt-10">
                Solución para el cumplimiento con el contrato ITS
                de los <strong>proyectos en concesión 4G y 5G.</strong>
              </h2>
            </div>
            <div className="flex flex-row gap-5 mt-[5rem]">
              <ItsCards />
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className='absolute bg-teal-600 top-10 p-5 ml-5 rounded-br-[2rem]'>
              <h1 className='text-white text-3xl uppercase font-bold'>más de 15 años de experiencia</h1>
            </div>

            <div className="mt-[10rem]">
              <div className='grid grid-rows-3 mt-6 mx-10 gap-12 justify-center items-center'>
                <div className={classContainer}>
                  <h1 className='text-cyan-950 font-bold text-8xl text-center'>35Km</h1>
                  <h2 className={classNameH2}>De túneles en 36 proyectos </h2>
                </div>
                <div className={classContainer}>
                  <h1 className='text-cyan-950 font-bold text-8xl text-center '>10+</h1>
                  <h2 className={classNameH2}>Proyectos entregados</h2>
                </div>
                <div className={classContainer}>
                  <h1 className='text-cyan-950 font-bold text-8xl text-center'>500+</h1>
                  <h2 className={classNameH2}>Km de ITS de cielo abierto</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItsSlide