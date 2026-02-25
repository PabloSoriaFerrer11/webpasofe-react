function flutterAMM() {
    return (
        <div className="two-column-layout">
            <section id="proyecto">
                <h2>Airosft Matchmaking</h2>
                <p>Mi primer proyecto "grande" desarrollado en FLUTTER para dispositivos Android y con posibilidad para
                    IOS.</p>
                <h4>Oportunidad</h4>
                <p>La idea de este proyecto me surge despues de que un amigo me invitara a unas partidas de este deporte
                    y ver como se gestionaban.
                    El mundo del Airosft se organiza en base a grupos de mensajería con 200 personas donde se indica un
                    fecha
                    y la gente se va apuntando en una lista interminable. Noté que faltaba un poco de tecnología para
                    llevar todos estas listas
                    y ya por 2024 comencé el documento "Airosft Encounter" </p>
                <br></br>
                <h4>Objetivo</h4>
                <p>El objetivo de este proyecto es crear una aplicación que permita a los jugadores de airsoft encontrar
                    partidas y compañeros de
                    juego de manera eficiente y organizada. La aplicación facilitará la gestión del creador de la
                    partida además de aportar una
                    "gamificación" del juego.</p>
                <br></br>
                <h4>Características Principales</h4>
                <ul className="padding-left">
                    <li className="">Creación de partidas</li>
                    <li className="">% de Vicotoria, KDA para los jugadores y sistema de KARMA</li>
                    <li className="">Gestión fácil de Eventos</li>
                </ul>
               
                <h4>Estado del Proyecto</h4>
                <p>Actualmente, el proyecto se encuentra en la fase de desarrollo inicial. Se están implementando las
                    funcionalidades básicas y se espera lanzar una versión beta pronto.</p>
            </section>
            <aside className="sidebar">
                <h3>Información Adicional</h3>
                <ul>
                    <li><a href="/projects/flutter_aam/aam_privatePolicy.html">Política de Privacidad</a></li>
                    <li><a href="/projects/flutter_aam/aam_faqs.html">FAQS</a></li>
                    <li>Próximas funciones</li>
                </ul>
                <div className="highlight-box">
                    <h4>¿Quieres probar la beta?</h4>
                    <p>Regístrate para recibir acceso anticipado cuando esté disponible.</p>
                    <button className="signup-button" > {/*onClick={() => enviarCorreoBeta()}*/}
                        <img src="assets/images/icons/email.jpg" alt="Email Icon" width="20"></img>
                        Registrarme
                    </button>
                </div>
            </aside>
        </div>
    
    );
}

export default flutterAMM;