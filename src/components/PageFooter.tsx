import githubIcon from '../assets/images/icons/github.png'
import linkedinIcon from '../assets/images/icons/linkedin.png'

export const PageFooter = () => {
    return (
    <footer>
        <p>&copy; Mejorada en 2026. Mi CV Web. Todos los derechos reservados.</p>
        <div className="iconosFooter">
            <a href="https://www.linkedin.com/in/pablo-soria-ferrer-529738225" target="_blank" className="icon-link">
                <img src={linkedinIcon} alt="LinkedIn" width="30"></img>
            </a>
            <a href="https://github.com/PabloSoriaFerrer11" target="_blank" className="icon-link">
                <img src={githubIcon} alt="GitHub" width="30"></img>
            </a>
        </div>
    </footer>
    );
}