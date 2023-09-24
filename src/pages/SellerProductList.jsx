import React from 'react'
import ProductCard from '../component/ProductCard';
import { Grid, Typography } from '@mui/material';
import Progress from '../component/Progress';
import { useQuery } from 'react-query';
import { $axios } from '../lib/axios';

const SellerProductList = () => {
  const {data,error,isLoading,isError}=useQuery({
    queryKey:["seller-product-list"],
    queryFn:async()=>{
        return await $axios.post("/product/seller/all",
        {
            page:1,
            limit:10,

        });
    },

  });
  const productList=data?.data;
  return (
  <>

  <Grid container 
      sx={{
          display:"flex", 
          justifyContent:"center", 
          alignItems:"center", 
          gap:"2rem", 
          flexWrap:"wrap",
          margin:"2rem 0 0 0"
      }}
  >
      
          {isLoading && <Progress/>}
          {error && (
              <Typography sx={{color:"red"}}>{error.response.data.message}</Typography>
          )}
          {productList?.map((item)=>{
              return <ProductCard key={item._id} item={item}/>
          })}
      
  </Grid>
</>
  )
};

export default SellerProductList