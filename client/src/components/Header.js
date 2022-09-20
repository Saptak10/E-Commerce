import { useState } from 'react'

import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, 
  ListItemText, Toolbar, Typography, Button, InputBase, MenuItem, Menu } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { styled, alpha } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/user/userSlice'

import { Link, useNavigate } from 'react-router-dom'

import '../App.css'

const drawerWidth = 200;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to='/profile' className='header-link-mobile'>Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to='/profile' className='header-link-mobile'>My account</Link></MenuItem>
    </Menu>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Commerce App
      </Typography>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton>
            <Link to='/' className='header-link-mobile'>
              <ListItemText primary='Home' />
            </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <Link to='/login' className='header-link-mobile'>
              <ListItemText primary='Login' sx={{ color: 'black' }}/>
            </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <Link to='/register' className='header-link-mobile'>
              <ListItemText primary='Register' sx={{ color: 'black' }}/>
            </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <Link to='/logout' className='header-link-mobile'>
              <ListItemText primary='Logout' sx={{ color: 'black' }}/>
            </Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
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
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/' className='header-link-desktop'>E-Commerce App</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="SEARCH"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton sx={{display: { sm: 'none' } }}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <IconButton sx={{display: { sm: 'none' } }}
          size="large"
          edge="end"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <Link to='/cart'><AddShoppingCartOutlinedIcon /></Link>
        </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link to='/' className='header-link-desktop'>Home</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link to='/login' className='header-link-desktop'>Login</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link to='/register' className='header-link-desktop'>Register</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link to='/logout' className='header-link-desktop'>Logout</Link>
              </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Link to='/cart'><AddShoppingCartOutlinedIcon sx={{ color: 'white' }}/></Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {renderMenu}
    </Box>
  );
}

export default Header;
