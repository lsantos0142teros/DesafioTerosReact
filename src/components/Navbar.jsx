import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <img className="logo" src="https://teros.com.br/wp-content/uploads/2021/04/Logotagline.svg" alt="Logo" />
            <nav className="perfil">
                <ul className="navlinks">
                    <a className="linkedin" href="https://www.linkedin.com/in/lucas-noriyuki-homi-dos-santos/">Lucas Noriyuki Homi dos Santos</a>
                </ul>
            </nav>
            <a className="link" href="https://www.linkedin.com/in/lucas-noriyuki-homi-dos-santos/"><button className="botao">LinkedIn</button></a>
        </div>
    )
}

export default Navbar;