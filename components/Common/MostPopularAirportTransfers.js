import React from "react";

const MostPopularAirportTransfers = () => {
  const popularTransfersLeft = [
    'Punta Cana International Airport to Club Med Resort',
    'Punta Cana International Airport to TRS Cap Cana Waterfront & Marina Hotel',
    'Punta Cana International Airport to Hyatt Ziva Cap Cana',
    'Punta Cana International Airport to Sanctuary Cap Cana',
    'Punta Cana International Airport to Zilara Cap Cana',
    'Punta Cana International Airport to Secrets Cap Cana Resort',
    'Punta Cana International Airport to Margaritaville Island Reserve',
    'Punta Cana International Airport to Eden Roc Cap Cana',
    'Punta Cana International Airport to Fishing Lodge Cap Cana',
    'Punta Cana International Airport to Villa At Cap Cana',
    'Punta Cana International Airport to Catatonía Bávaro Cabeza de Toro',
    'Punta Cana International Airport to Sunscape Coco Punta Cana - All Inclusive',
    'Punta Cana International Airport to Jewel Palm Beach',
    'Punta Cana International Airport to Serenade All Suites',
    'Punta Cana International Airport to Barceló Bávaro Palace',
    'Punta Cana International Airport to Melia Punta Cana Beach',
    'Punta Cana International Airport to Paradisus Grand Cana - All Suites',
    'Punta Cana International Airport to Majestic Colonial Punta Cana'
  ];

  const popularTransfersRight = [
    'Punta Cana International Airport to Grand Palladium Bávaro Suites Resort & Spa',
    'Punta Cana International Airport to Hard Rock Hotel & Casino',
    'Punta Cana International Airport to Excellence Resort',
    'Punta Cana International Airport to Dreams Macao Beach Punta Cana',
    'Punta Cana International Airport to Nickelodeon Hotel & Resorts',
    'Punta Cana International Airport to Royalton Bávaro',
    'Punta Cana International Airport to Club Med Miches',
    'Punta Cana International Airport to Airbnb',
    'Punta Cana International Airport to Bayahibe',
    'Punta Cana International Airport to Hilton La Romana',
    'Punta Cana International Airport to La Romana',
    'Punta Cana International Airport to Casa de Campo Resorts and Villas',
    'Punta Cana International Airport to Juan Dolio',
    'Punta Cana International Airport to SDQ Airport',
    'Punta Cana International Airport to Boca Chica',
    'Punta Cana International Airport to Santo Domingo',
    'Punta Cana International Airport to Puerto Plata',
    'Punta Cana International Airport to Sosua'
  ];

  return (
    <section style={{ fontFamily: 'Carter One, sans-serif', backgroundColor: '#f0f0f0', paddingTop: '30px', paddingBottom: '100px', marginTop: '-50px' }}>
      <div className='container'>
        {/* Popular Transfers Section */}
        <div className='row justify-content-center'>
          <div className='col-md-10 text-center mb-5'>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ACEA', marginBottom: '30px' }}>Most Popular Airport Transfers</h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-5'>
            <ul className='popular-transfers-list' style={{ listStyle: 'none', paddingLeft: '0', color: '#204F99', marginTop: '10px' }}>
              {popularTransfersLeft.map((transfer, index) => (
                <li key={index} className='popular-transfer-item' style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <img src="https://i.ibb.co/bzD8RJw/flecha.png" alt="flecha" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                  <span>{transfer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-md-5'>
            <ul className='popular-transfers-list' style={{ listStyle: 'none', paddingLeft: '0', color: '#204F99', marginTop: '10px' }}>
              {popularTransfersRight.map((transfer, index) => (
                <li key={index} className='popular-transfer-item' style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <img src="https://i.ibb.co/bzD8RJw/flecha.png" alt="flecha" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                  <span>{transfer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopularAirportTransfers;
