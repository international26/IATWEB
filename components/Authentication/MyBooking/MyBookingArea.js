import React from "react";

const CustomerArea = () => {
  return (
    <div style={{ height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src="https://app.internationalairporttransfers.com/customer?site_key=7e3f3d3085b900d598bc40543d611575"
        allow="geolocation"
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="0"
        style={{
          border: "0",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "fill" 
        }}
      ></iframe>
    </div>
  );
};

export default CustomerArea;
