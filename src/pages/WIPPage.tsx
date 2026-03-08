function WIP(){
    return(
        <main className="maintenance-container">
    <section className="content">
        <div className="icon">🚧</div>
        <h1>Sitio en Construcción</h1>
        <p>Estamos trabajando duro para traerte algo increíble. ¡Vuelve pronto!</p>
        
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '70%' }}></div>
        </div>
        
       
    </section>
</main>
    );
}

export const WIPPage = () => {
    return (
        <WIP />
    );
}