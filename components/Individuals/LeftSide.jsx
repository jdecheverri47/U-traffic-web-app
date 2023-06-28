import { useContext } from "react"
import { ContextProps } from "../Composable/ContextProps"
import ContactBubbles from "./ContactBubbles"

function LeftSide( ) {
  const { leftRef } = useContext(ContextProps)

  return (
    <div className="bg-cyan-950" ref={leftRef}>
      <div className="w-full flex justify-center">
        <h1 className='text-center md:text-7xl xl:text-8xl text-emerald-300 mt-[7rem] font-bold uppercase h-fit w-fit'>Contáctanos</h1>
      </div>
      

      <div className="flex flex-wrap flex-row justify-center items-center mt-20">
        <ContactBubbles />
      </div>
    </div>
  )
}

export default LeftSide