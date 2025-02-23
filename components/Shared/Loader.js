import React from 'react';

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className='preloader js-preloader' style={{ textAlign: 'center' }}>
          <img
            src='/images/preloader.gif'
            alt='Loading...'
            style={{ width: '227px', height: '164px' }} // Ajusta el tamaño de la imagen aquí
          />
          <div> {/* Ensure there's a <div> containing a <ul> here */}
           
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
