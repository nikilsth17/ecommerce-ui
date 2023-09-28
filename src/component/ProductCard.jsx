import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import ProductDetail from '../pages/ProductDetail';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const product = props.item;
  const userRole = localStorage.getItem("userRole");

  const naviagate= useNavigate();
  const goToDetail=()=>{
    naviagate(`/product/details/${product._id}`);
  }
  return (
    <Box item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: {
            xs: "100vw",
            sm: "25vw",
          },
          

          maxHeight: 500,
          boxShadow:
            " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <CardMedia
          onClick={()=>goToDetail()}
          sx={{
            objectFit: "cover", 
            height: "200px",
            cursor:"pointer" // Consider using a consistent height value
          }}
          component="img"
          alt={product?.name}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IkKlZwT8j_xFieeC3J1C964Q4ui0HvIOwQ&usqp=CAU"
        />
        <CardContent>
          <Stack direction="row" gap="1rem">
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
            <Chip label={product?.company} color="success" variant="outlined" />
          </Stack>
          <Typography variant="h6">Rs. {product?.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description.slice(0, 100)}.....
          </Typography>
        </CardContent>
        <CardActions>
        <Button
            size="small"
            variant="contained"
            onClick={() => goToDetail()}
          > 
            Explore         
          </Button> 
          {userRole === "seller" && (
            <Button
              size="small"
              variant="contained"
              color="error"
              // onClick={(event) => openPopover(event)}
            >
              Delete
            </Button>
)}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
