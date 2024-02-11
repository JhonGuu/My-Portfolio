import typescript from '../assets/Typescript_logo_2020.svg'
import reactLogo from '../assets/react.svg'
import TailwindCss from '../assets/tailwindcss.svg'
const Body = () => {
  return (
    <main className='flex w-auto h-auto ' >
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4'>
        <a href="https://es.react.dev" className=' flex text-white  m-1 p-2 font-bold text-4xl'>React</a>        
        <img className= '' src={reactLogo} width={300} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>2024</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Learning</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-100" > 45%</div>
        </div>
      </section>
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4'>
        <a href="https://tailwindcss.com" className=' flex text-white  m-1 p-2 font-bold text-4xl'>Tailwind CSS</a>        
        <img className= '' src={TailwindCss} width={300} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>2024</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Learning</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-100" > 45%</div>
        </div>
      </section>
      <section className='justify-center inline-block text-center  w-30 align-top border-2  rounded-2xl hover:border-green-500 shadow-xl shadow-cyan-500/50 p-1 mb-4 px-4'>
        <a href="https://es.react.dev" className=' flex text-white  m-1 p-2 font-bold text-4xl'>React</a>        
        <img className= '' src={typescript} width={280} alt="image-personal" />
        <p className='text-white text-center m-1 p-1 font-bold text-2xl'>2024</p>
        <p className='text-white text-center m-1 p-1 font-bold text-1xl'>Learning</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-100" > 45%</div>
        </div>
      </section>
    </main>
  );
};

export default Body;