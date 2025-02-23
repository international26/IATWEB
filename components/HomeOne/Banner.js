import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  const iframeRef = useRef(null);
  const [widgetHeight, setWidgetHeight] = useState(900); // Altura inicial del widget

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current && iframeRef.current.contentDocument && iframeRef.current.contentDocument.body) {
        const bodyHeight = iframeRef.current.contentDocument.body.scrollHeight;
        const documentHeight = iframeRef.current.contentDocument.documentElement.scrollHeight;
        const height = Math.max(bodyHeight, documentHeight);
        setWidgetHeight(height); // Actualiza la altura del widget
      }
    };

    const handleResize = () => {
      resizeIframe();
    };

    window.addEventListener("resize", handleResize);
    resizeIframe();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="body_overlay"></div>
      <div
        className="hero-wrap style1"
        style={{
          backgroundImage: `url(/images/banner1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 1,
          minHeight: "20px",
          display: "flex",
          alignItems: "center",
          marginBottom: "-100px",
          height: `${widgetHeight}px`,
        }}
      >
        <div className="hero-shape-two sm-none">
          <img
            src="/images/hero/hero-shape-2.png"
            alt="Shape Two"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="hero-content text-center">
                <div
                  className="booking-widget-container"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    height: `${widgetHeight}px`,
                    marginTop: "40px",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                >
                  {/* Imagen reemplazando el cuadro de texto */}
                  <img
                    src="/images/banner98.png"
                    alt="Banner"
                    style={{
                      width: "55%", // Reduce el ancho al 80%
                      height: "auto",
                      maxHeight: "55%", // Reduce la altura máxima al 80%
                      objectFit: "cover",
                      margin: "0 auto", // Centra la imagen horizontalmente
                      display: "block",
                    }}
                  />

                  {/* Iframe */}
                  <iframe
                    ref={iframeRef}
                    src="https://app.internationalairporttransfers.com/booking/widget?site_key=7e3f3d3085b900d598bc40543d611575"
                    id="eto-iframe-booking-widget"
                    allow="geolocation"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="0"
                    style={{
                      border: "0",
                      minHeight: `${widgetHeight}px`,
                      pointerEvents: "auto",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales para responsividad */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content .booking-widget-container {
            height: auto; /* Ajuste de altura para pantallas pequeñas */
            margin-top: 20px;
          }
        }

        @media (min-width: 769px) {
          .hero-content .booking-widget-container {
            height: auto; /* Ajuste de altura para pantallas grandes */
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
