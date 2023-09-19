import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { $axios } from '../lib/axios';
import ProductCard from '../component/ProductCard';

const BuyerProductList = () => {
  const {data,error,isError,isLoading}= useQuery({
    queryKey:["buyer-product-list"],
    queryFn:async()=>{
      return await $axios.post("/product/buyer/all",
      {
        page:1,
        limit:5,
      });
    },
  });

  const products= data?.data;
  return(
    <>
    <Grid>
      {isLoading && <Typography >Loading.....</Typography>}
      {isError && (
        <Typography sx={{color:"red"}}>
          {error.response.data.message}
        </Typography>
      )}

      {products?.map((item)=>{
        return <ProductCard key={item._id} item={item}/>
      })}  
    </Grid>
    </>
  )
};

export default BuyerProductList;