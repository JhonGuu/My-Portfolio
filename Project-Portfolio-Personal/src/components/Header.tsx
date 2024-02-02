const Header = () => {
    return (
        <header className= 'bg-red-500'>
            <div className="caja">
      <nav>
        <ul className="justify-end">
          <li className="justify-end"><a href="index.html">Home</a></li>
          <li><a href="productos.html">About Me</a></li>
          <li><a href="/contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </div>
        </header>
    );
};

export default Header;