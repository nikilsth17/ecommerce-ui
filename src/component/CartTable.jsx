import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRandomId } from '../utilis/randomIdGenerate';
import {AiOutlineDelete, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { Stack, Typography } from '@mui/material';




const tableHeadData=["Image","Name","Company","Price per unit","Quantity","Total","Remove"];
const CartTable=(props)=> {


 


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table" >
        <TableHead>
          <TableRow>
            {tableHeadData.map((item)=>{
              return(
                <TableCell key={getRandomId()} align={item==="Image"?"left":"center"}>
                  <Typography variant='subtitle1'>{item}</Typography>
                </TableCell>
              );
            })}

          </TableRow>
        </TableHead>
        <TableBody>
          {props.cartData.map((item) => (
            <TableRow
              key={getRandomId()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMy0HzEdFihrjVAgV9Y4pRvcDyn6QvPdmRA&usqp=CAU" height={100}/>
              </TableCell>
              <TableCell align="left">
                <Typography variant='body1'> {item?.name}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant='body1'>{item?.company}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant='body1'>{item?.price}</Typography>
              </TableCell>

              <TableCell align="left">
                <Stack sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"1rem"
                }}
                >
                  <AiOutlineMinus color='green' size={15}/>
                    <Typography>{item?.orderQuantity}</Typography> 
                  <AiOutlinePlus color='green' size={15}/>

                </Stack>
              </TableCell>

              <TableCell align="left">
                <Typography variant='body1'> {item?.total}</Typography>
              </TableCell>

              <TableCell align='center'>
                <AiOutlineDelete 
                  size={20} 
                  style={{color:"red"}}
                  cursor="pointer"
                />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable;