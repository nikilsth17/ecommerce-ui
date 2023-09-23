import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ProductCard = (props) => {
    const product= props.item;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
       <Card sx={{
        padding:"0px",
        maxWidth:"100%",
        maxHeight:"400px", 
        boxShadow:" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" 
        }}
    >
         <CardMedia sx={{
            objectFit:"cover", height:"200px"
         }}
        component="img"
        alt={product?.name}
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IkKlZwT8j_xFieeC3J1C964Q4ui0HvIOwQ&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.description.slice(0,100)}.....
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
   
  
  )
}

export default ProductCard