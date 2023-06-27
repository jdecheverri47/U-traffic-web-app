import Image from 'next/image'
import logoPicture from '/public/assets/images/logo.png'

const styleNavText = 'py-3 px-2 text-center text-lg'

function NavBar() {
  return (
    <>
      <header className="px-4 py-4 bg-white shadow-md w-full">
        <nav className="flex flex-wrap flex-row justify-between items-center">
          <div className='ml-8'>
            <Image
              src={logoPicture}
              alt="Logo"
              width={50}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-wrap flex-row justify-between gap-8 items-center">
            <ul className="flex flex-wrap flex-row justify-between gap-8 text-cyan-950 font-semibold">
              <li className={styleNavText}><a href="#first-section">Nosotros</a></li>
              <li className={styleNavText}><a href="#second-section">Que Hacemos</a></li>
              <li className={styleNavText}><a href="#third-section">Contacto</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar