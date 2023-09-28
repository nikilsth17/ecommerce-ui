import React, { useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Grid, Pagination, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { $axios } from '../lib/axios'
import Progress from '../component/Progress'
import { Box } from '@mui/system'

const BuyerProductList = () => {
    const [page,setPage]=useState(1);
    const {data,error,isLoading,isError}=useQuery({
        queryKey:["buyer-product-list",page],
        queryFn:async()=>{
            return await $axios.post("/product/buyer/all",
            {
                page,
                limit:6,

            });
        },

    });
    const products=data?.data?.products;
    const totalPage= data?.data?.totalPage;
  return (
    <>
   
    <Grid container 
        sx={{
            display: "flex",
            flexDirection:"row",
            
            justifyContent: "center",
            alignItems: "center",
            // flexWrap:"wrap", 
            gap: "2rem",
            minHeight: "60vh",
            // minWidth:"300px",
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
    <Pagination
        count={totalPage}
        color="secondary"
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "none",
          mt: "2rem",
        }}
        onChange={(_, value) => {
          setPage(value);
        }}
      />
    </>
  )
}

export default BuyerProductList