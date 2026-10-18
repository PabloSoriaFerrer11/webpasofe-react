const MINECRAFT_SERVER_URL = 'https://mc.dev-pasofe.com';

export const MinecraftServerPage = () => {
  return (
    <main className="game-build-page minecraft-server-page">
      <section className="game-copy minecraft-server-copy">
        <p className="eyebrow">Minecraft • Servidor</p>
        <h2>Un mundo para jugar</h2>
        <p>
          Este es el espacio del servidor de Minecraft de DEV-PASOFE. Puedes consultar su
          disponibilidad y acceder a la página del servidor desde el siguiente enlace.
        </p>

        <div className="minecraft-address">
          <span>Dirección del servidor</span>
          <code>mc.dev-pasofe.com</code>
        </div>

        <div className="game-actions">
          <a
            className="download-button"
            href={MINECRAFT_SERVER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar servidor
          </a>
        </div>

        <p className="game-note">
          Si aparece como desconectado, el servidor puede estar apagado temporalmente.
        </p>
      </section>
    </main>
  );
};
