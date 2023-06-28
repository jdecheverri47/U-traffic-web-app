import { XCircleIcon } from  '@heroicons/react/24/outline'

function CloseButton({ closeSlide }) {
  return (
    <div>
      <button onClick={closeSlide} className='absolute text-white right-0 mr-5 mt-5 z-30'>
        <XCircleIcon className='w-7 h-7 hover:text-emerald-300 transition-all ease-in-out duration-300' />
      </button>
    </div>
  )
}

export default CloseButton


