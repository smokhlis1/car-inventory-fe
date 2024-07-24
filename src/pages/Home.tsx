import Background from '../assets/images/cars.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
        <div className='flex place-items-start mt-5 h-screen'>
            <h3 className='font-sans text-3xl p-6 px-32 bg-blue-400 bg-opacity-50 text-black rounded'>Car Inventory</h3>

        </div>
    </div>
  )
}

export default Home
