import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Newsletter from '../../components/Common/Newsletter';
import DestinationList from '../../components/Destination/DestinationList';

const Destination = () => {
  return (
    <>
      <PageBanner
        bannerTitle='Our Recommended Destinations'
        pageName='Destinations'
      />
      
      <DestinationList />
      
      <Newsletter inputStyle="style2" shape={false}/>
    </>
  );
};

export default Destination;
