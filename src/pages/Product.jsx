import React from 'react'
import BuyerProductList from './BuyerProductList';
import SellerProductList from './SellerProductList';

const Product = () => {
    const userRole =localStorage.getItem("userRole");
  return (
    <>{userRole==="seller"? <SellerProductList/>:<BuyerProductList/>}</>
  );
}

export default Product