import foto from '../assets/foto-portada.jpg'
const Body = () => {
  return (
    <main className='flex w-auto h-auto ' >
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4'>
        <h2 className='text-white text-center m-1 p-1 font-bold text-4xl '>React</h2>
        <img className= '' src={foto} width={400} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>Java</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Traini</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-100" > 45%</div>
        </div>
      </section>
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4'>
        <h2 className='text-white text-center m-1 p-1 font-bold text-4xl '>Tailwind-CSS</h2>
        <img className= '' src={foto} width={400} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>Web Developer - Front End</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Traini</p>
      </section>
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4 '>
        <h2 className='text-white text-center m-1 p-1 font-bold text-4xl '>Juan Jose Aranda</h2>
        <img className= '' src={foto} width={400} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>Web Developer - Front End</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Traini</p>
      </section>
    </main>
  );
};

export default Body;