import React from 'react'
import ProductCard from '../component/ProductCard'
import { Grid, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { $axios } from '../lib/axios'
import Progress from '../component/Progress'

const BuyerProductList = () => {
    const {data,error,isLoading,isError}=useQuery({
        queryKey:["buyer-product-list"],
        queryFn:async()=>{
            return await $axios.post("/product/buyer/all",
            {
                page:1,
                limit:10,

            });
        },

    });
    const products=data?.data;
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
            {products?.map((item)=>{
                return <ProductCard key={item._id} item={item}/>
            })}
        
    </Grid>
   
    </>
  )
}

export default BuyerProductList