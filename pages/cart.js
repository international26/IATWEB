import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import CartArea from '../components/Cart/CartArea';

const Cart = () => {
  return (
    <>
      <PageBanner bannerTitle='Cart' pageName='cart' />
      
      <CartArea/>
    </>
  );
};

export default Cart;
