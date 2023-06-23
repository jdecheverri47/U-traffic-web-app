import Image from "next/image";
import SecurityCards from "../Containers/SecurityCards";

function SecuritySlide({ onCloseSlide }) {
  const classNameH2 = 'text-white text-3xl ml-3 text-start'
  const classContainer = 'flex flex-row items-center w-[90%] justify-start relative'

  const closeSlide = () => {
    console.log(onCloseSlide)
    onCloseSlide();
    console.log('working close Slide')
  }
  return (
    <div className='absolute h-screen w-screen bg-cyan-950 z-30 overflow-hidden flex justify-center items-center top-0 left-0'>
      <div className='w-full h-full grid grid-rows-8'>

        <div className="overflow-hidden row-start-1 row-end-7">
          <div className="w-full flex items-center justify-center">
            <div className='absolute z-30 flex items-center justify-center top-12 w-fit h-fit '>
              <h1 className='text-white text-7xl uppercase font-bold'>seguridad y señalizacion</h1>
            </div>
          </div>

          <div className="flex flex-row gap-10 h-[50vh] absolute w-full justify-center items-center z-30 mt-14 pt-7">
            <SecurityCards />
          </div>

          <div>
            <button onClick={closeSlide} className='absolute text-white right-0 top-0 mr-5 mt-5 z-30'>Close</button>
          </div>

          <div className="max-h-fit relative" style={{ width: "100%", height: "100%" }}>
            <Image src='/assets/images/Securitybg.png' alt='street image' style={{objectFit: "cover", objectPosition: "center", aspectRatio: '16/9'}} quality={100} priority={true} fill />
          </div>
        </div>


        <div className="relative row-start-7 row-end-8">
          <div className="w-full h-full flex items-center justify-start">

            <div className='absolute left-10 bottom-80 bg-teal-600 p-5 ml-5 rounded-br-[2rem] w-fit h-fit'>
              <h1 className='text-white text-3xl uppercase font-bold'>más de 15 años de experiencia</h1>
            </div>

            <div className="ml-12 mt-10" >
              <div className='justify-start items-center ml-12'>
                <div className={classContainer}>
                  <h1 className='text-emerald-300 font-bold text-7xl text-left'>1.000Km</h1>
                  <h2 className={classNameH2}>de vías intervenidas</h2>
                </div>
                <div className={classContainer}>
                  <h1 className='text-emerald-300 font-bold text-7xl text-left mt-5'>+10.000</h1>
                  <h2 className={classNameH2}>Metros lineales de defensas instaladas</h2>
                </div>
                <div className={classContainer}>
                  <h1 className='text-emerald-300 font-bold text-7xl text-left mt-5'>+10.000</h1>
                  <h2 className={classNameH2}>Señales verticales instaladas</h2>
                </div>
              </div>


            </div>

            <div className="mr-[2rem] shadow-md">
              <Image alt="street photo" src="/assets/images/SecurityPoster.png" width={550} height={550} quality={100} className="rounded-xl border border-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecuritySlide