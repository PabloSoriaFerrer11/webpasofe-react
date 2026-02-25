import { Link } from "react-router-dom";

import logo from '../assets/images/icons/PASOFE.png'

export const PageHeader = () => {
  return (
    
    <header>
        <div>
            <div className="logo">
                <img src={logo} alt="Logo de DEV-PASOFE" width="100"></img>
            </div>
            <button id="theme-toggle" className="toggle-btn">🌙 Oscuro / ☀️ Claro</button>
        </div>


        <h1>¡Bienvenido a DEV-PASOFE!</h1>
        <p className="welcome-text">Aqui te explico quien soy y que proyectos tengo sobre la mesa.</p>

        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/todo">ToDo</Link></li>
                <li className="dropdown">
                    <a>Proyectos ▼</a>
                    <ul className="dropdown-menu">
                        <li><a href="flutter_amm.html">Airosft Matchmaking</a></li>
                        <li><a href="">Estrategy</a></li>
                        <li><a href="">Prácticas</a></li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    </header>
  );
};