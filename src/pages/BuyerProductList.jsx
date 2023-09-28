import React from 'react'
import ProductCard from '../component/ProductCard'
import { Grid, Pagination, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { $axios } from '../lib/axios'
import Progress from '../component/Progress'
import { Box } from '@mui/system'

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
   
    <Box container 
        sx={{
            display: "flex",
            flexDirection:"row",
            
            justifyContent: "center",
            alignItems: "center",

            gap: "2rem",
            minHeight: "60vh",
            minWidth:"300px",
        }}
    >
        
            {isLoading && <Progress/>}
            {error && (
                <Typography sx={{color:"red"}}>{error.response.data.message}</Typography>
            )}
            {products?.map((item)=>{
                return <ProductCard key={item._id} item={item}/>
            })}
        
    </Box>
    <Pagination count={10} color="primary" sx={{background: "none",
                mt: "1rem",
                mb: "1rem",
                display: "flex",
                justifyContent: "center", }}
      />
    </>
  )
}

export default BuyerProductList