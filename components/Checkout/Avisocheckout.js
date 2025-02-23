import React, { useState, useEffect } from "react";

const AvisoCheckout = () => {
  const [isVisible, setIsVisible] = useState(true);  // Cambiado a true para mostrar por defecto
  const [pageLoadCount, setPageLoadCount] = useState(0);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    // Función para manejar la carga de la página
    const handlePageLoad = () => {
      // Incrementar el contador de cargas de la página
      setPageLoadCount(pageLoadCount + 1);
    };

    // Agregar un event listener para detectar la carga de la página
    window.addEventListener("load", handlePageLoad);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [pageLoadCount]);

  useEffect(() => {
    // Mostrar los términos y condiciones después de la segunda carga de la página
    if (pageLoadCount === 2) {
      setIsVisible(true);
    }
  }, [pageLoadCount]);

  const styles = {
    avisoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      paddingTop: "50px",
    },
    avisoCard: {
      backgroundColor: "#f0f0f0",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      maxWidth: "600px",
      padding: "20px",
      overflow: "hidden",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(-20px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    },
    avisoContent: {
      maxHeight: "400px",
      overflowY: "auto",
    },
    toggleButton: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "20px",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.1s ease",
      outline: "none",
    },
    toggleButtonHover: {
      backgroundColor: "#0056b3",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.avisoContainer}>
      <div style={styles.avisoCard}>
        <div style={styles.avisoContent}>
          <h3>International Aiport Tranfers's Terms and Conditions</h3>
          <hr />
          <p>
            <strong>REFUNDS:</strong> No refunds for no shows without prior
            notification. No refunds if customer cancels to go with another
            company after booking and paying to International Aiport Tranfers.
          </p>
          <p>
            <strong>DEPARTURES:</strong> If driver arrives at hotel for pickup
            at assigned time and client delays pickup without notice, no refund
            will be granted.
          </p>
          <p>
            <strong>BOOKING MISTAKES:</strong> No refund for customer mistakes
            resulting in missing the service.
          </p>
          <p>
            <strong>FLIGHT ISSUES:</strong> Contact International Aiport Tranfers at least 2
            hours before service if flight is cancelled or connection is missed.
            New transfer required if driver is sent without updated flight
            information.
          </p>
          <p>
            <strong>RESERVATION POLICIES:</strong> If your hotel, place, or
            Airbnb is not listed on our website, we do not provide service
            there. Please choose locations listed on our website.
          </p>
          <p>
            <strong>FLIGHT DELAYS:</strong> We do our best to accommodate
            delayed flights, but reserve the right to cancel and refund if
            delays prevent service.
          </p>
          <p>
            <strong>AIRBNB’s TRANSFERS:</strong> Provide address at least 24
            hours before scheduled service. Failure to do so may result in
            cancellation with an 11% cancellation fee.
          </p>
          <p>
            <strong>CANCELLATIONS:</strong> All cancellations are subject to an
            11% cancellation fee. Fee subject to change over time.
          </p>
          <p>
            <strong>RESERVATION VERIFICATION:</strong> ID required for
            verification of main passenger identity.
          </p>
          <p>
            <strong>MULTIPLE FLIGHTS:</strong> All passengers must arrive on the
            same flight. Reservations with guests arriving on different flights
            will be cancelled with a 10% cancellation charge deducted from
            refund.
          </p>
          <p>
            <strong>CHILD SEATS:</strong> Car seats are required in accordance
            with DR Law 6317 Article 69. Parents are responsible for choosing
            and providing suitable car seats.
          </p>
        </div>
      </div>
      <button
        style={
          isVisible
            ? { ...styles.toggleButton, ...styles.toggleButtonHover }
            : styles.toggleButton
        }
        onClick={toggleVisibility}
      >
        {isVisible ? "Hide Terms" : "Show Terms"}
      </button>
    </div>
  );
};

export default AvisoCheckout;
