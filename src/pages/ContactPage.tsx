
import { useForm, ValidationError } from '@formspree/react';

function Contact(){
    const [state, handleSubmit] = useForm("xppaydnp");

    if (state.succeeded) {
        return (
            <div className="contact-success" role="status">
                <h2>Mensaje enviado</h2>
                <p>Gracias por escribirme. Te responderé lo antes posible.</p>
            </div>
        );
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-intro">
                <p className="contact-eyebrow">Contacto</p>
                <h2>Hablemos</h2>
                <p>¿Tienes una idea, una incidencia o quieres contactar conmigo por otro lado? Escríbeme.</p>
            </div>

            <div className="form-field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    required
                />
                <ValidationError
                    prefix="Correo electrónico"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="form-field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    rows={6}
                    required
                />
                <ValidationError
                    prefix="Mensaje"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button className="contact-submit" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>        
       
    );
};

{/*
        <h2>Contacto</h2>
        <p>Si tienes alguna indicencia o simplemente deseas ponerte en contacto conmigo puedes hacerlo a través del siguiente correo: </p>
        <p><a href="mailto:pablocvpcruz@gmail.com">pablocvpcruz@gmail.com</a> </p>
        <br></br>
        <p>Tambien estoy abierto a hablar por <a href="https://www.linkedin.com/in/pablo-soria-ferrer-529738225" target="_blank" 
            className="icon-link"> Linkedin. </a> </p>
        <br></br>
        
        <p>APARTADO EN PROCESO DE MEJORA</p>
        */ }
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
        <main className="contact-page">
            <Contact />    
        </main>
    );
};