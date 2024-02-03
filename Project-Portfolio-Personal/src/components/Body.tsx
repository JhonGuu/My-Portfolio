import foto from '../assets/foto-portada.jpg'
const Body = () => {
  return (
    <main>
      <div id='cart-present' className="">
        <ul className=''>
          <li className=' justify-center inline-block text-center  w-30% align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 '>
            <h2 className='text-white text-center m-1 p-1 font-bold text-4xl '>Juan Jose Aranda</h2>
            <img className= '' src={foto} width={400} alt="image-personal" />
            <p className='text-white text-center m-1 p-1 font-bold text-2xl'>Web Developer - Front End</p>
            <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Traini</p>
          </li>
        </ul>

      </div>
    </main>
  );
};

export default Body;