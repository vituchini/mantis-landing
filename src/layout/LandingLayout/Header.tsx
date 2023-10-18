import { Button, Container, Link, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import logo from 'assets/images/artboard-logo.svg';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="relative"
      sx={{ bgcolor: 'transparent', color: theme.palette.text.primary, boxShadow: 'none', paddingBlock: 1.5, mt: 3 }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', gap: '89px' }}>
        {/* TODO: add logo icon */}
        <Link component={RouterLink} to="/landing" color="inherit" underline="none">
          <CardMedia component="img" image={logo} />
        </Link>
        <Stack
          component="nav"
          direction="row"
          gap={5}
          sx={{
            flex: 1,
            '& .header-link': {
              color: theme.palette.grey[600],

              '&:hover': {
                color: theme.palette.grey[800]
              }
            }
          }}
        >
          <Link className="header-link" href="#" underline="none">
            Our services
          </Link>
          <Link className="header-link" href="#" underline="none">
            How it works
          </Link>
          <Link className="header-link" href="#" underline="none">
            Benefits
          </Link>
          <Link className="header-link" href="#" underline="none">
            Use Cases
          </Link>
        </Stack>
        {/* TODO: change button to match design */}
        <Button variant="contained">Get Started</Button>
      </Container>
    </AppBar>
  );
};

export default Header;
