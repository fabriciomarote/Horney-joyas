import React from 'react';
import logo from "../horney-joyas.png"
import '../styles/Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div className="box-title">  
                        <a href="/" className='logo'><img src={logo} alt="logo"/></a>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <a href="/" className="btn-btn">INICIO</a>
                    <div className="dropdown">
                        <button className="dropbtn btn-btn" id='btn-btn'>PRODUCTOS</button>
                        <div className="dropdown-content">
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
    );
  }
  
  export default Navbar;

  
  /*
  
  <div className='nav-buttons'>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                     
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/" className="btn-btn">INICIO</a></li>
                            <li className="dropdown">
                            <a className="dropdown-toggle btn-btn" data-toggle="dropdown">PRODUCTOS <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="/anillos" className="btn-drop">Anillos</a></li>
                                <li><a href="/aritos" className="btn-drop">Aritos</a></li>
                                <li><a href="/collares" className="btn-drop">Collares</a></li>
                                <li><a href="/dijes" className="btn-drop">Dijes</a></li>
                                <li><a href="/piercings" className="btn-drop">Piercings</a></li>
                                <li><a href="/pulseras" className="btn-drop">Pulseras</a></li>
                            </ul>
                            </li>
                            <li><a href="/aritos" className="btn-btn">CONTACTO</a></li>
                        </ul>
                    </div>
                </div> 
  
  
  */