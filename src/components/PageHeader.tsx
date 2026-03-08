import { Link } from "react-router-dom";
import { ThemeToggle } from "../buttons/ThemeToggle";

import logo from '../assets/images/icons/PASOFE.png'

export const PageHeader = () => {
  return (
    
    <header>
        <div>
            <div className="logo">
                <img src={logo} alt="Logo de DEV-PASOFE" width="100"></img>
            </div>
            <ThemeToggle />
        
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
                        <li><Link to="/proyectos/flutter-amm">Airsoft Matchmaking</Link></li>
                        <li><Link to="/WIP">Prácticas</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a>En Dominio ▼</a>
                    <ul className="dropdown-menu">
                        <li><Link to="/proyectos/estrategy">Estrategy</Link></li>
                        <li><Link to="/proyectos/Heretics">Heretics</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
  );
};