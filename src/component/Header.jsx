import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Stack } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Link, NavLink } from 'react-router-dom';
import {BiLogOut} from "react-icons/bi";
import LogoutDialog from './LogoutDialog';

const drawerWidth = 240;
const navItems = [
  {
  id:1,
  name:"Home",
  path:"/home",
  },
  {
    id:2,
    name:"Product",
    path:"/product",
  },
  {
    id:3,
    name:"About",
    path:"/about",
  }
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',color:"black"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar component="nav"
      sx={{
        minHeight:"4rem",
        display:"flex",
        backgroundColor:"#F6F4EB", 
        
      
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:"black" }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: '0', sm: '5rem' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#0f0f0f',textDecoration:"none"}}>
                <NavLink to={item.path}
                    className={({ isActive }) =>
                    isActive ? "navlink-active" : "navlink-pending"
                  }
                >
                  <Typography sx={{color:"black",textDecoration:"none"}}>
                    {item.name}
                  </Typography> 
                </NavLink>
              </Button>
            ))}
           
          </Box>
          <Stack direction="row" spacing={2} >
            <Avatar
              sx={{ bgcolor: deepOrange[400] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              N
            </Avatar>
          </Stack>
          <LogoutDialog/>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            color:"black"
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    
    </Box>
  );
}


export default Header;