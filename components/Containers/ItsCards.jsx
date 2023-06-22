import Image from 'next/image'

const ItsData = [
  {
    id: 1,
    description: 'Suministro de equipos',
    img: '/assets/images/Suministro.png',
  },
  {
    id: 2,
    description: 'Equipo certificado humano',
    img: '/assets/images/RecursoHumano.png',
  },
  {
    id: 3,
    description: 'Suministro de SCADA abierto',
    img: '/assets/images/Scada.png',
  }
]

function ItsCards() {
  const cards = ItsData.map((card) => (
    <div key={card.id} className='flex justify-center items-center w-[20rem] h-[20rem] flex-wrap flex-col bg-emerald-300 rounded-br-[3rem] p-4 shadow-md border border-cyan-950 bg-opacity-90'>
      <div className='flex justify-center items-center'>
        {card.id === 1 ? <Image src={card.img} width={50} height={50} alt={card.description} /> : <Image src={card.img} width={100} height={100} alt={card.description} style={{marginTop: '1.5rem'}}/> }
      </div>
      <div className='flex justify-center items-center h-fit mt-5'>
        <h1 className='text-cyan-950 text-center font-semibold text-2xl z-30 pointer-events-none align-bottom mt-2'>
          {card.description}
        </h1>
      </div>
    </div>
  ))
  return (
    cards
  )
}

export default ItsCards