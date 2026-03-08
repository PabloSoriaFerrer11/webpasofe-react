function Heretics(){
    return(
  
            <div className="two-columns-layout">
                <h2>Heretics FAN</h2>
                <p>Como comento en la página principal, me considero una persona creativa y uno de mis Hobies consiste en seguir los deportes 
                    electrónicos. Uno de mis equipos favoritos es el Heretics.</p>
                <br></br>
                <h4>Oportunidad</h4>
                <p> Despues de migrar la WEB a react y enter un poco de su funcionamiento vi la oportunidad de mejorar la experiencia del fan de Heretics.
                    Ahora mismo, heretics esta en una etapa de crecimiento y expansión, y creo que sus fans necesitan una plataforma donde poder ver distintas
                    comunidades de los juegos en los que compiten.
                </p>
                <br></br>
                <h4>Objetivo</h4>
                <p> Hacer una página web sencilla dedicada a los equipos de Heretics adaptando el estilo de la página a los colores corporativos.
                    En esta página se podran encontrar todos los juegos donde participan heretics y comunidades de otros juegos relacionados. 
                </p>
                <br></br>  
            </div>
   
    );
}

function OficialLinkPage(){
    return(
    
        <div className="two-columns-layout">
            <h2>Enlace a la página de Heretics</h2>
            <p>Si quieres visitar la página de Heretics, haz click en el siguiente enlace:</p>
            <a href="https://teamheretics.com/" target="_blank" rel="noopener noreferrer">Visitar Página de Heretics</a>
        </div>
    
    );
}

function FanPage(){
    return(
        <div  className="highlight-box center-text">   
            <a href="" target="_blank" rel="noopener noreferrer">VISITA EL PROYECTO</a>
        </div>
    );
}

export const HereticsPage = () => {
    return (
        <main>
            
                <Heretics />
                <FanPage />
                <OficialLinkPage />
            
        </main>
        
       
    );
}