import React from 'react';
import PageBanner from '../../../components/Common/PageBanner';
import DestinationContent from '../../../components/Destination/DestinationContent';
import FeatureTour from '../../../components/Common/FeatureTour';

const DestinationDetails = () => {
  return (
    <>
      <PageBanner
        bannerTitle='Our Recommended Destinations'
        pageName='Destinations'
      />

      <DestinationContent/>

      <div className="bg-heath ptb-100">
        <FeatureTour 
          viewButton={true} 
        />
      </div>
    </>
  );
};

export default DestinationDetails;
