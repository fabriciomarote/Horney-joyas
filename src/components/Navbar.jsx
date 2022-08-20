import React, { useContext } from 'react'
import logo from "../horney-joyas.png"
import '../styles/Navbar.css';
import Context from './Contexto';
import Modal from './Modal';

const Navbar = () => {

    return (
        <>
            <div className="navbar-container">
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-title">  
                            <a href="/" className='logo'><img src={logo} alt="logo"/></a>
                        </div>
                    </div>
                    <div className="nav-btn">
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
                        <a  className="btn-btn"> CONTACTO</a>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Navbar;