function HomeCV(){
    return (
        <div className="two-column-layout">
            <section id="inicio">
                <h2>Sobre mi</h2>
                <p>¡Te doy la bienvenida a mi página! Quedate un rato mientras encuentras lo que hayas venido a buscar
                    y te voy contando mis cosas. ^^ </p>
                <div className="formalities">
                    <h3>Las formalidades primero</h3>
                    <div className="formalities-content">
                        <p>Mi nombre es Pablo Soria Ferrer, soy un desarrollador Valenciano nacido en el... <b>¡2002!</b>.
                            <small> Eso será curioso dependiendo del año en el que estes leyendo esto...</small>
                        </p>
                        <p>Actualmente estoy trabajando como desarrollador en <a href="https://www.ahora.es/"
                                target="_blank" rel="noreferrer">AHORA</a>, una empresa dedicada a la creación de soluciones
                            para otras empresas con tecnologías LOWCODE o un ERP propio.</p>
                        <p>En mi tiempo libre me gusta desarrollar proyectos personales, como <a href="/proyectos/flutter_amm.html"
                                target="_blank" rel="noreferrer">Airsoft Matchmaking</a>, un proyecto que busca mejorar la experiencia de los
                            jugadores de Airsoft. Si quieres saber más sobre este proyecto, puedes visitar la sección de proyectos en el menú de
                            navegación.</p>
                    </div>
                </div>



            </section>
            <aside className="sidebar">
                <h3>WEBs Amigas</h3>
                <ul>
                    <li>
                        <a href="https://vulkaj.es/index.html" target="_blank" rel="noreferrer">Vulkaj.es</a>
                        <p className="friend-description">Web personal dedicada a la creación de contenido sobre videojuegos, peliculas y
                                pasatiempos. </p>
                    </li>
                    <li>
                        <a href="https://canoojson.dev/es" target="_blank" rel="noreferrer">CanooJSON</a>
                        <p className="friend-description">Porfolio profesional de Sergio Cano, compañero de trabajo en AHORA. Echa un vistazo!  </p>
                    </li>
                </ul>
            </aside>
        </div>
        
    );
    
}

function HomeTrayectory(){
    return (
                <div>
            <section id="cv">
                <h4>Mi trayectoria</h4>
                <div className="cv-trajectory-layout">
                    <div className="trayectoria">
                        <ul className="timeline">
                            <li>
                                <div className="year">02/06/2022 - Actualidad</div>
                                <div className="desc">Desarrollador - AHORA FREEWARE</div>
                            </li>
                            <li>
                                <div className="year">23/12/2023</div>
                                <div className="desc">STAFF - Omega World Games</div>
                            </li>
                            <li>
                                <div className="year">21/03/2022-02/06/2022</div>
                                <div className="desc">Prácticas AHORA FREEWARE</div>
                            </li>
                        </ul>
                        <div className="formalities">
                            <p>Más de 3 años de experiencia en el sector del desarrollo. Conocimientos de lenguajes de
                                programación como: <strong> JS, TS, VB6, C# </strong> Además de conocer tambien el lenguaje de
                                <strong> T-SQL </strong>de SQL SERVER. Con el tiempo he ido aprendiendo nuevas tecnologías
                                y herramientas como <strong>REACT</strong> para hacer esta WEB o <strong>DART(FLUTTER)</strong> para hacer aplicaciones multiplataforma.</p>
                        </div>
                    </div>
                    <aside className="sidebar">
                        <h3>Descargar CV</h3>
                        <div className="cv-downloads">
                            <a href="/CV%20-%20Pablo%20Soria%20Ferrer%20-%20ES.pdf" download="CV-Pablo-Soria-Ferrer-ES.pdf">
                                CV en español
                            </a>
                            <a href="/CV%20-%20Pablo%20Soria%20Ferrer%20-%20EN.pdf" download="CV-Pablo-Soria-Ferrer-EN.pdf">
                                CV in English
                            </a>
                        </div>
                    </aside>
                </div>

                <br></br>
                <h4>Mis estudios</h4>
                <div className="trayectoria">
                    <ul className="timeline">
                        <li>
                            <div className="year">2020-2022</div>
                            <div className="desc">DAM - IES El Grao</div>
                        </li>
                        <li>
                            <div className="year">2018-2020</div>
                            <div className="desc">Bachillerato Técnico - IES Puçol</div>
                        </li>
                    </ul>                    
                </div>
                <br></br>
                <h4>Otros</h4>
                <div className="padding-left">
                    <ul className="padding-left">
                        <li>
                            <div className="year">Carnet de conducir.</div>
                        </li>
                        <li>
                            <div className="year">Nivel B2 de Ingles.</div>
                        </li>
                        <li>
                            <div className="year">Curso de Finanzas básico.</div>
                        </li>
                    </ul>
                    
                </div>
            </section>
        </div>
    );
};

export const HomePage = () => {
    return (
        <main className="home-page">
            <HomeCV />
            <HomeTrayectory />
        </main>
    );
}