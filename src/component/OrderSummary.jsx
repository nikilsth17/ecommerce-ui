import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
  return (
    <Box sx={{
            padding:"2rem",
            borderRadius:"10px",

            background:"#71c55d",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
            alignItems:"center"

        }} 
    >
        <Typography variant='h5' mb="1rem">Order summary</Typography>
        <Stack direction="row" spacing={16} justifyContent="space-between">
            <Typography>Sub total</Typography>
            <Typography>1500</Typography>
        </Stack>
        <Stack direction="row" spacing={16} justifyContent="space-between">
            <Typography>Discount</Typography>
            <Typography>1500</Typography>
        </Stack>
        <Stack direction="row" spacing={16} justifyContent="space-between">
            <Typography>Grand total</Typography>
            <Typography>150000</Typography>
        </Stack>
    </Box>
  )
}

export default OrderSummary