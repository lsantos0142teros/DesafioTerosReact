import React from 'react';
import './Navbar.css';
import Botao from "./Botao";


const Navbar = () => {

    const handleBotaoClick = () => {
        window.location.href = "https://www.linkedin.com/in/lucas-noriyuki-homi-dos-santos/"
    }

    return(
        <div className="navbar">
            <img className="logo-teros" src="https://teros.com.br/wp-content/uploads/2021/04/Logotagline.svg" alt="Logo" />
            <nav className="perfil">
                <ul className="navlinks">
                    <a className="linkedin" href="https://www.linkedin.com/in/lucas-noriyuki-homi-dos-santos/">Lucas Noriyuki Homi dos Santos</a>
                </ul>
            </nav>
            <div className='link'><Botao onClick={handleBotaoClick}>LinkedIn</Botao></div>
        </div>
    )
}

export default Navbar;