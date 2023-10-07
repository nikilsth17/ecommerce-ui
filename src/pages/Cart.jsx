import { Box, Grid } from '@mui/material'
import React from 'react'
import CartTable from '../component/CartTable'
import OrderSummary from '../component/OrderSummary'
import { useQuery } from 'react-query'
import { $axios } from '../lib/axios'
import Progress from '../component/Progress'

const Cart = () => {
  const  {data,isError,error,isLoading}=useQuery({
    queryKey:["cart-data"],
    queryFn: async()=>{
      return await $axios.get("/cart/data");
    },
  })
  const cartData= data?.data?.cartData;
  const subTotal= data?.data?.subTotal;
  const grandTotal= data?.data?.grandTotal;
  if (isLoading){
    return <Progress/>
  }

  return (
    <Box sx={{
            mt:"5rem",
            display:"flex",
            padding:"3rem",
            justifyContent:"space-between",
            gap:"2rem"
        }}
    >
        <Grid container 
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius:"10px"
            }} sm={9}>
            <CartTable cartData={cartData}/>
        </Grid> 
        <Grid container sm={4} flexDirection="row" justifyContent="center">
           <OrderSummary subTotal={subTotal} grandTotal={grandTotal}/>
        </Grid>
    </Box>

  )
}

export default Cart