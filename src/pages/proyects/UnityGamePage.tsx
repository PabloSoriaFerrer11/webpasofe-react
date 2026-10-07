const UNITY_BUILD_PATH = '/unity-game/index.html';
const WINDOWS_DOWNLOAD_PATH = '/downloads/WindowsBuild.zip';
const WINDOWS_DOWNLOAD_AVAILABLE = true;

export const UnityGamePage = () => {
  return (
    <main className="game-build-page">
      <section className="unity-showcase">
        <div className="game-copy">
          <p className="eyebrow">Unity • WebGL</p>
          <h2>Mi juego en Unity</h2>
          <p>
            Este es mi primer juego desarrollado en Unity, que fue exportado a Web para poder ser jugado directamente desde el navegador.
            También se encuentra disponible un archivo ZIP para Windows que contiene la build completa del juego.
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
