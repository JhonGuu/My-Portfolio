import { useCallback, useState } from 'react';
import clsx from 'clsx';
import viking from '../assets/logo-minimalista-blanco.png'

const NavMenu = () => {
  const [visibleMenu,setVisibleMenu] = useState(false);
  const handleButttonMenu = useCallback( () => { 
  setVisibleMenu(!visibleMenu)
  },[visibleMenu]);
return (
  <header>       
    <div className="mx-auto">
      <nav className="flex justify-between lg:justify-start items-center">
        <div className="logo p-2 w-1/6 m-4">
          <img src={viking} width={400} alt="" />
        </div>
        <div className='links lg:block hidden w-4/6 md:4/6'>
          <ul className='menu flex items-center justify-center gap-5 '>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>About Me</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>Skills</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>Projects</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>Contact</a></li>            
          </ul>  
        </div>
        <div className='block lg:hidden w-1/6 lg:w-4/6 p-10 m-10 '>
          <button className='text-white text-xl border-solid' onClick={handleButttonMenu}>Menu</button>
          <ul className={clsx('w-full absolute z-50 left-0 text-center bg-teal-400 p-4',visibleMenu ? 'visible' : 'hidden')}>
          <li><a href="" className='text-white text-lg border-solid'>About Me</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400 '>Skills</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>Projects</a></li>
            <li><a href="" className='text-white text-lg font-bold hover:text-green-400'>Contact</a></li>            
          </ul>  
        </div>
      </nav>        
    </div>
  </header>  
            );
    
};


export default NavMenu;














// import viking from '../assets/logo-minimalista-blanco.png'
// const Header = () => {
//     return (
//      <div className=" flex w-[1920px] xsm:w-full mx-auto">
//       <header>          
//        <nav className=" flex lg:justify-start items-center content-center p-7 m-7">
//         <div className="logo flex-initial p-2 w-1/6">
//           <img src={viking}  alt="vikingbear" />
//         </div>  
//         <div className="links lg:flex hidden text-right w-1/6 md:4/6 ">        
//           <ul className=' flex menu items-center justify-center gap-5'>          
//             <li className="text-white  p-1 font-bold hover:text-green-400 "><a href="#">Home</a></li>
//             <li className="text-white  p-1 font-bold hover:text-green-400"><a href="#">About Me</a></li>
//             <li className="text-white  p-1 font-bold hover:text-green-400"><a href="#">Contacto</a></li>
//           </ul>
//         </div>
//        </nav>   
//       </header>
//      </div>
//     );
// };

// export default Header;