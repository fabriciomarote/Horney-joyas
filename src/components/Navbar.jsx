import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className='nav-left'>
                    <div className="box-title col-lg-12 col-md-12 col-sm-12 col-xs-12">  
                        <a href={`/`} className='title'>Horny Joyas </a>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='nav-buttons'>
                        <a href="/" className="btn-btn">INICIO</a>
                        <div className="btn-group" role="group">
                            <a type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PRODUCTOS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a href="/anillos" className="btn-drop">Anillos</a>
                                <a href="/aritos" className="btn-drop">Aritos</a>
                                <a href="/collares" className="btn-drop">Collares</a>
                                <a href="/dijes" className="btn-drop">Dijes</a>
                                <a href="/piercings" className="btn-drop">Piercings</a>
                                <a href="/pulseras" className="btn-drop">Pulseras</a>
                            </div>
                        </div>  
                        <a href="/aritos" className="btn-btn">CONTACTO</a>
                    </div> 
                </div>
            </div>
      </div>
    );
  }
  
  export default Navbar;