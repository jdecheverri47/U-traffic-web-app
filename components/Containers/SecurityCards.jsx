import Image from 'next/image'

const securityData = [
  {
    id: 1,
    description: 'Diseño de la solución de señalización y seguridad vial',
    img: '/assets/images/SecurityAd.png',
    background: 'bg-teal-600'
  },
  {
    id: 2,
    description: 'Talleres propios para la fabricación y señalización vertical y horizontal',
    img: '/assets/images/SecurityTwo.png',
    background: 'bg-cyan-950'
  },
  {
    id: 3,
    description: 'Importadores directos de barandas de seguridad',
    img: '/assets/images/SecurityThree.png',
    background: 'bg-emerald-300'
  }
]

function SecurityCards() {
  const cards = securityData.map((card) => (
    <div key={card.id} className={`flex justify-center items-center w-[20rem] h-[20rem] flex-wrap flex-col p-4 shadow-md border border-cyan-950 rounded-md ${card.background}`}
    >
      <div className='flex justify-center items-center'>
        <Image src={card.img} width={100} height={100} alt={card.description} style={{marginTop: '1.5rem'}}/> 
      </div>

      <div className='flex justify-center items-center h-fit mt-5'>
        { card.id === 1 || card.id === 2 ?
        <h1 className='text-white text-center text-xl z-30 pointer-events-none align-bottom mt-2'>
          {card.description}
        </h1>
        :
        <h1 className='text-cyan-950 text-center font-semibold text-xl z-30 pointer-events-none align-bottom mt-2'>
          {card.description}
        </h1>
        }
      </div>
    </div>
  ))
  return (
    cards
  )
}

export default SecurityCards