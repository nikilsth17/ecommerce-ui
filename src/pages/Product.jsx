import React from 'react'
import BuyerProductList from './BuyerProductList';
import SellerProductList from './SellerProductList';
import { Box, Button, Stack } from '@mui/material';
import {HiOutlineViewGridAdd} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';


const Product = () => {
    const userRole =localStorage.getItem("userRole");
    const naviagate= useNavigate();
  return (
    <Box sx={{
      mt:"2rem",
      padding: {
        xs: "3rem",
        sm: "3rem",
      },
      }}
    >
      <Stack sx={{
       display: "flex",
       flexDirection: "row",
       justifyContent: {
         xs: "center",
         sm: "center",
         md: "flex-end",
       },
       alignItems: "center",

       mr: {
         xs: 0,
         sm: "5rem",
       },
      }}>
        {
          userRole==="seller" &&   <Button variant='contained' 
          onClick={()=>naviagate("/product/add")} 
          sx={{
            gap:"1rem"
          }}
        ><HiOutlineViewGridAdd size={"1.5rem"}/> Product</Button>
        }
      
    
      </Stack>
      {userRole==="seller"? <SellerProductList/>:<BuyerProductList/>}
    </Box>
  );
}

export default Product