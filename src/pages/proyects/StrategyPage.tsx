import { Link } from "react-router-dom";

function Strategy(){
    return (
        <div className="two-columns-layout">
            <h2>Strategy</h2>
            <p> Me declaro tambien fan de los juegos de mesa, asi que decidñi intentar recrear uno de mis favoritos, El Risk. 
                 </p>
            <br></br>
            <h4>Oportunidad</h4>
            <p> Ya habiendo experimentado con la creación de aplicaciones moviles y Flutter con el proyecto de <Link to="/proyectos/flutter-amm">Airsoft Matchmaking</Link>
                , me vi con confianza de recrear este tipo de juego en una aplicación web.
            </p>
            <br></br>
            <h4>Objetivo</h4>
            <p> Hacer una página web donde los juegadores puedan simular partidas de Risk con diferentes mapas y reglas.
                Las disputas de territorios se harían en otros juegos de estrategia en tiempo real, como Age of Empires, Total War o Starcraft
                , para darle un toque más dinámico y divertido.
            </p>
            <br></br>  
        </div>
    );
}


function ProyectPage(){
    return(
        <div  className="highlight-box center-text">   
            <a href="http://estrategy.dev-pasofe.com/" target="_blank" rel="noopener noreferrer">VISITA EL PROYECTO</a>
        </div>
    );
}

export const StrategyPage = () => {
    return (
        <main>  
            <Strategy />
            <ProyectPage />
        </main>
    );
}   