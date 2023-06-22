import Image from "next/image";

function ItsSlide({ onCloseSlide }) {

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
            <h1 className="text-cyan-950 font-bold text-5xl">ITS</h1>
            <h2 className="text-cyan-950 text-4xl mt-2">
              Solución para el cumplimiento con el contrato ITS
              de los <strong>proyectos en concesión 4G y 5G.</strong>
            </h2>
          </div>

        </div>

      {/* Background Image */}
        <div className="h-full w-full fixed -z-10 top-0 left-0">
          <Image src='/assets/images/Itsbg.png' alt='Peaje Imagen' width={2000} height={2500} style={{objectFit: "cover", objectPosition: "center", aspectRatio: '16/9'}} quality={100} priority={true} />
        </div>
      </div>
    </div>
  )
}

export default ItsSlide