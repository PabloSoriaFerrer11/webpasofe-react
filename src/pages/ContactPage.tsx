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
/***
    // Make sure to run npm install @formspree/react
    // For more help visit https://formspr.ee/react-help
    import React from 'react';
    import { useForm, ValidationError } from '@formspree/react';

    function ContactForm() {
    const [state, handleSubmit] = useForm("xppaydnp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
        </form>
    );
    }
 */
export const ContactPage = () => {  
    return (
       <Contact />    
    );
};