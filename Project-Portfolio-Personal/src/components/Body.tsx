import foto from '../assets/foto-portada.jpg'
const Body = () => {
    return (
        <div className="">
            <body>
              <div className=" cart  justify-items-center p-2   h-1/4 w-1/4    ">
                <div className='flex justify-center border-x-white shadow-emerald-400'>
                <img className='rounded-2xl' src={foto} width={400} alt="foto portada" />
                </div>
                <div className=' text-white flex justify-center  text  t-5xl p-1 m-1 '>
                <h1>Juan Jose Aranda</h1>
                
                </div>
                <p className=' text-white flex justify-center  text  t-5xl p-1 m-1 '>Web Developer Front-End</p>
                
              </div>    
            </body>
        </div>
    );
};

export default Body;