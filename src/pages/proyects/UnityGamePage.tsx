const UNITY_BUILD_PATH = '/unity-game/index.html';
const WINDOWS_DOWNLOAD_PATH = '/downloads/WindowsBuild.zip';
const WINDOWS_DOWNLOAD_AVAILABLE = false; // Cambia a true si el archivo ZIP está disponible para descargar

export const UnityGamePage = () => {
  return (
    <main className="game-build-page">
      <section className="unity-showcase">
        <div className="game-copy">
          <p className="eyebrow">Unity • WebGL</p>
          <h2>Galaxy Strike</h2>
          <p>
            Este juego forma parte del desarrollo de un curso de UDEMY que completé y me ayudo a comprender
            mejor el motor de Unity
          </p>

          <div className="game-actions">
            {WINDOWS_DOWNLOAD_AVAILABLE ? (
              <a className="download-button" href={WINDOWS_DOWNLOAD_PATH} download>
                Descargar ZIP para Windows
              </a>
            ) : (
              <span className="download-button" aria-disabled="true" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                Descarga de Windows no disponible
              </span>
            )}
            <a className="secondary-button" href={UNITY_BUILD_PATH} target="_blank" rel="noreferrer">
              Abrir build web completa
            </a>
          </div>

          <p className="game-note">
            Nota: La build web puede tardar unos segundos en cargar, dependiendo de la velocidad de tu conexión a internet.
          </p>
        </div>

        <div className="unity-frame-card">
          <iframe
            className="unity-frame"
            src={UNITY_BUILD_PATH}
            title="Build del juego en Unity"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};
