function Contact(){
    return (
        <main>
        
        <h2>Contacto</h2>
        <p>Si tienes alguna indicencia o simplemente deseas ponerte en contacto conmigo puedes hacerlo a través del siguiente correo: </p>
        <p><a href="mailto:pablocvpcruz@gmail.com">pablocvpcruz@gmail.com</a> </p>
        <br></br>
        <p>Tambien estoy abierto a hablar por <a href="https://www.linkedin.com/in/pablo-soria-ferrer-529738225" target="_blank" 
            className="icon-link"> Linkedin. </a> </p>
        <br></br>
        
        <p>APARTADO EN PROCESO DE MEJORA</p>
    </main>
    );
};

export const ContactPage = () => {  
    return (
       <Contact />    
    );
};