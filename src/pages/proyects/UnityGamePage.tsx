const UNITY_BUILD_PATH = '/unity-game/index.html';
const WINDOWS_DOWNLOAD_PATH = '/downloads/WindowsBuild.zip';

export const UnityGamePage = () => {
  return (
    <main className="game-build-page">
      <section className="unity-showcase">
        <div className="game-copy">
          <p className="eyebrow">Unity • WebGL</p>
          <h2>Mi juego en Unity</h2>
          <p>
            Aquí puedes mostrar la versión web del juego directamente en la página y
            ofrecer la descarga del archivo ZIP para Windows.
          </p>

          <div className="game-actions">
            <a className="download-button" href={WINDOWS_DOWNLOAD_PATH} download>
              Descargar ZIP para Windows
            </a>
            <a className="secondary-button" href={UNITY_BUILD_PATH} target="_blank" rel="noreferrer">
              Abrir build web completa
            </a>
          </div>

          <p className="game-note">
            Para que esto funcione, debes dejar la build WebGL dentro de la carpeta
            <strong> public/unity-game </strong> y el ZIP de Windows dentro de
            <strong> public/downloads </strong>.
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
