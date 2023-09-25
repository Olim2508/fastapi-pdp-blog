import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BookIcon from '@mui/icons-material/Book';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../api';
import {MenuList} from '@mui/material';


const ResponsiveNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('logged out');
    setAnchorElNav(null);
    dispatch(logOut());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BookIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Blog
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {/* hidden inside hamburger items*/}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component={Link} style={{textDecoration: 'none'}} to={'/'} textAlign="center">
                    Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component={Link} style={{textDecoration: 'none'}} to={'/categories/'} textAlign="center">
                    Categories
                </Typography>
              </MenuItem>
              {isAuthenticated && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={Link} style={{textDecoration: 'none'}} to={'/create/'} textAlign="center">
                    Create Post
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <BookIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Blog
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {/*  navbar items*/}
            <Button
              onClick={handleCloseNavMenu}
              component={Link}
              to={'/'}
              sx={{my: 2, color: 'white', display: 'block'}}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              component={Link}
              to={'/categories/'}
              sx={{my: 2, color: 'white', display: 'block'}}
            >
              Categories
            </Button>
            {isAuthenticated && (
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to={'/create/'}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
              Create Post
              </Button>
            )}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              {isAuthenticated ? (
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Log out</Typography>
                    </MenuItem>
                ) : (
                    <MenuList>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          style={{textDecoration: 'none'}} component={Link} to={'/sign-up'} textAlign="center">
                            Sign up
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          style={{textDecoration: 'none'}} component={Link} to={'/log-in'} textAlign="center">
                            Log in
                        </Typography>
                      </MenuItem>
                    </MenuList>
                )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;
