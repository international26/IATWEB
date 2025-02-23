import React from "react";

const About = () => {
  // Datos estáticos: características
  const features = [
    { title: 'Variety of Vehicles', description: 'Choose from a variety of vehicles with excellent drivers, whether you\'re traveling solo or in a group.', icon: 'https://i.ibb.co/w64tZg9/Variety-of-Vehicles.png' },
    { title: 'Safety First', description: 'Our vehicles adhere to strict safety protocols, ensuring a clean and hygienic environment for all passengers.', icon: 'https://i.ibb.co/RHC7015/Safety-First.png' },
    { title: 'Flexible Pricing', description: 'We offer pricing options tailored to your needs, ensuring affordability without compromising on quality.', icon: 'https://i.ibb.co/NxrghcB/Flexible-Pricing.png' },
    { title: 'Punctuality Guaranteed', description: 'Experience punctual pick-ups and drop-offs at the airport or any destination of your choice.', icon: 'https://i.ibb.co/5RGr38g/Punctuality-Guaranteed.png' },
    { title: 'Great Customer Experiences', description: 'Join countless satisfied customers who have enjoyed our reliable and efficient airport transfer services.', icon: 'https://i.ibb.co/q96yzPc/Great-Customer-Experiences.png' },
    { title: 'Customized Experience', description: 'Contact us to offer you a special and exclusive service, our agents will be happy to assist you.', icon: 'https://i.ibb.co/pPrR2fT/Customized-Experience.png' }
  ];

  return (
    <section style={{ fontFamily: 'Carter One, sans-serif', backgroundColor: '#f0f0f0', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className='container'>
        {/* Título y Descripción */}
        <div className='row justify-content-center mb-5'>
          <div className='col-md-10 text-center'>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '12px', color: '#EBB133' }}> Why choose international airport transfers? </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              When you decide to come to Punta Cana, Dominican Republic, the first thing you need to know is how to get good transportation with excellent services that are secure and safe. Our transportation offers exactly what you're looking for (International Aiport Tranfers).
            </p>
            <h2 style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#00ACEA' }}>Here are some reasons to choose international airport transfers for your airport transfer:</h2>
          </div>
        </div>

        {/* Características */}
        <div className='row justify-content-center mb-5'>
          {features.map((feature, index) => (
            <div key={index} className='col-lg-4 col-md-6 mb-4'>
              <div className='feature-card text-center' style={{
                border: '2px solid #ff182b',
                backgroundColor: '#00ACEA',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                height: '100%'
              }}>
                <img src={feature.icon} alt={feature.title} className='mb-3' style={{ width: '60px', height: '60px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#fff' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
