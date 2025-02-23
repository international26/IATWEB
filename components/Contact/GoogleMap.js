import React from "react";

const GoogleMap = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="comp_map style2">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15119.381315551!2d-68.44623877525576!3d18.670935466820765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlaza%20tobacco%2C%20local%20%2326%2C%20Punta%20Cana%2C%20DR!5e0!3m2!1ses-419!2sdo!4v1721152121423!5m2!1ses-419!2sdo"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
