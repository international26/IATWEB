import React, { useState } from "react";

const TripAdviced = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  const handleTripAdvisorClick = () => {
    window.open("https://www.tripadvisor.com/", "_blank");
  };

  const handleViatorClick = () => {
    window.open("https://www.viator.com/", "_blank");
  };

  return (
    <div className="tripadvisor text-center">
      <div onClick={openOverlay}>
        <img
          src="/images/tripa3.gif"
          alt="Tripadvisor Logo"
          className="img-fluid mb-3 tripadvisor-logo"
          style={{ maxWidth: "500px", height: "auto" }} // Ajustar tamaño de la imagen al 40% más grande
        />
      </div>

      {overlayOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <img
              src="https://www.puntacana4life.com/images/logo.png"
              alt="Puntacana4life Logo"
              className="overlay-logo"
              style={{ maxWidth: "100px", height: "auto" }}
            />
            <div className="button-container">
              <button className="overlay-button" onClick={handleTripAdvisorClick}>Go to TripAdvisor</button>
              <button className="overlay-button" onClick={handleViatorClick}>Go to Viator</button>
            </div>
            <button className="overlay-close-button" onClick={closeOverlay}>Cerrar</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .tripadvisor {
          max-width: 100%; /* Ajusta el componente al ancho máximo */
        }

        .tripadvisor-logo {
          max-width: 100%; /* Ajusta la imagen al ancho del contenedor */
          height: auto; /* Mantiene la proporción de la imagen */
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .overlay-content {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          position: relative;
          max-width: 80%;
          max-height: 80%;
          overflow: auto;
        }

        .overlay-logo {
          width: 100%;
          height: auto;
          max-width: 100px; /* Ajusta el tamaño del logo */
          margin-bottom: 20px;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Espacio entre los botones */
        }

        .overlay-button {
          padding: 12px 24px;
          font-size: 18px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
          width: 100%; /* Botones ocupan todo el ancho del contenedor */
        }

        .overlay-button:hover {
          background-color: #0056b3;
        }

        .overlay-close-button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .overlay-close-button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default TripAdviced;
