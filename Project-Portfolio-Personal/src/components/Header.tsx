const Header = () => {
    return (
     <div className="w-[1920px] xsm:w-full mx-auto">
      <header>          
       <nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
        <div className="logo flex-initial p-2 w-1/6">
          <img src="../assets/logo-minimalista-blanco.png"  alt="vikingbear" />
        </div>  
        <div className="links lg:block hidden w-1/6 md:4/6 ">        
          <ul className=' flex menu items-center justify-center gap-5'>          
            <li className="text-white block p-1 font-bold hover:text-green-400 "><a href="">Home</a></li>
            <li className="text-white block p-1 font-bold hover:text-green-400"><a href="">About Me</a></li>
            <li className="text-white block p-1 font-bold hover:text-green-400"><a href="">Contacto</a></li>
          </ul>
        </div>
       </nav>   
      </header>
     </div>
    );
};

export default Header;