import { useState } from 'react'

import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, 
  ListItemText, Toolbar, Typography, Button, MenuItem, Menu } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import Search from './Search'
import SearchIconWrapper from './SearchIconWrapper'
import StyledInputBase from './StyledInputBase'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../.././features/user/userSlice'

import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

const drawerWidth = 200;

function Header(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <MenuItem onClick={handleMenuClose}><Link to='/account' className='header-link-mobile'>My account</Link></MenuItem>
    </Menu>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EBuy World
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
          {user ? (
            <ListItem>
              <ListItemButton>
              <div onClick={onLogout} className='header-link-mobile'>
                <ListItemText primary='Logout' sx={{ color: 'black' }}/>
              </div>
              </ListItemButton>
            </ListItem>
          ) : (
            <>
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
            </>
            )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx = {{background: 'teal'}}>
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
            <Link to='/' className='header-link-desktop'>EBuy World</Link>
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
          <Link to='/cart'><AddShoppingCartOutlinedIcon  sx={{ color: 'white' }}/></Link>
        </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link to='/' className='header-link-desktop'>Home</Link>
              </Button>
                {user ? (
                <Button sx={{ color: '#fff' }}>
                {/* <Link onClick={onLogout} className='header-link-desktop'>Logout</Link> */}
                <div onClick={onLogout} className='header-link-desktop'>Logout</div>
              </Button>
               ) : (
              <>
                <Button sx={{ color: '#fff' }}>
                  <Link to='/login' className='header-link-desktop'>Login</Link>
                </Button>
                <Button sx={{ color: '#fff' }}>
                  <Link to='/register' className='header-link-desktop'>Register</Link>
                </Button>
              </>
               )}
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
            keepMounted: true,
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
