import { Box, CardMedia, Container, IconButton, Link, Menu, MenuItem, Stack, SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import logo from 'assets/images/artboard-logo.svg';
import { useState } from 'react';
import CallToActionButton from 'components/call-to-action-button/CallToActionButton';

const LINKS = [
  {
    label: 'Our services',
    path: '#'
  },
  {
    label: 'How it works',
    path: '#'
  },
  {
    label: 'Benefits',
    path: '#'
  },
  {
    label: 'Use Cases',
    path: '#'
  }
];

const Header = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{ bgcolor: 'transparent', color: theme.palette.text.primary, boxShadow: 'none', paddingBlock: 1.5, mt: 3 }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', gap: '89px', justifyContent: { xs: 'space-between', md: 'start' } }}>
        <Link component={RouterLink} to="/landing" color="inherit" underline="none">
          <CardMedia component="img" image={logo} />
        </Link>
        <Stack
          component="nav"
          direction="row"
          gap={5}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flex: 1,
            '& .header-link': {
              color: theme.palette.grey[600],

              '&:hover': {
                color: theme.palette.primary.main
              }
            }
          }}
        >
          {LINKS.map(({ label, path }) => (
            <Link key={label} href={path} className="header-link" underline="none">
              {label}
            </Link>
          ))}
        </Stack>
        <Box display={{ xs: 'none', md: 'block' }}>
          <CallToActionButton label="Get Started" href="#" variant="contained" size="small" />
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <SvgIcon>
              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </SvgIcon>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              maxWidth: '230px',
              width: '100%'
            }}
          >
            {LINKS.map(({ label, path }) => (
              <MenuItem
                key={label}
                onClick={handleCloseNavMenu}
                sx={{
                  alignItems: 'stretch'
                }}
              >
                <Link
                  sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    color: theme.palette.grey[600],

                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                  underline="none"
                  href={path}
                >
                  {label}
                </Link>
              </MenuItem>
            ))}
            <MenuItem onClick={handleCloseNavMenu}>
              <CallToActionButton label="Get Started" href="#" variant="contained" size="small" />
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
