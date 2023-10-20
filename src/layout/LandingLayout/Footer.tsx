import { FacebookOutlined } from '@ant-design/icons';
import { Box, CardMedia, Container, Grid, Link, Stack, Typography, styled, useTheme } from '@mui/material';

import imgFooterSoc1 from 'assets/images/landing/img-soc1.svg';
import imgFooterSoc2 from 'assets/images/landing/img-soc2.svg';

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

const SocialLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '0.875rem',
  fontWeight: 400,
  opacity: '0.6',
  cursor: 'pointer',
  '&:hover': {
    opacity: '1'
  }
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ bgcolor: theme.palette.grey.A700, pt: 6, pb: 2 }}>
      <Container>
        <Grid container spacing={2} mb={8}>
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Typography variant="h5" color="white" sx={{ fontWeight: 500 }}>
                Mantis
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.grey[400]
                }}
              >
                Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={{ xs: 5, md: 2 }} justifyContent={{ md: 'flex-end' }}>
              <Grid item xs={6} sm={3}>
                <Stack spacing={{ xs: 3, md: 5 }}>
                  <Typography variant="h5" color="white" sx={{ fontWeight: 500 }}>
                    Quick Links
                  </Typography>
                  <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                    <FooterLink href="#" target="_blank" underline="none">
                      Home
                    </FooterLink>
                    <FooterLink href="#" target="_blank" underline="none">
                      Tasks &#47; Projects
                    </FooterLink>
                    <FooterLink href="#" target="_blank" underline="none">
                      Minutes Utilization
                    </FooterLink>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Stack spacing={{ xs: 3, md: 5 }}>
                  <Typography variant="h5" color="white" sx={{ fontWeight: 500 }}>
                    Help
                  </Typography>
                  <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                    <FooterLink href="#" target="_blank" underline="none">
                      Support Chat
                    </FooterLink>
                    <FooterLink href="#" target="_blank" underline="none">
                      Ticketing System
                    </FooterLink>
                    <FooterLink href="#" target="_blank" underline="none">
                      FAQ
                    </FooterLink>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Stack spacing={{ xs: 3, md: 5 }}>
                  <Typography variant="h5" color="white" sx={{ fontWeight: 500 }}>
                    Legal
                  </Typography>
                  <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                    <FooterLink href="#" target="_blank" underline="none">
                      Terms of service
                    </FooterLink>
                    <FooterLink href="#" target="_blank" underline="none">
                      Privacy policy
                    </FooterLink>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle2" color="secondary">
                © 2023 Artboard. All rights reserved. Legal information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <SocialLink underline="none">
                    <CardMedia component="img" image={imgFooterSoc1} alt="Instagram icon" />
                  </SocialLink>
                </Grid>
                <Grid item>
                  <SocialLink underline="none">
                    <CardMedia component="img" image={imgFooterSoc2} alt="Twitter icon (now X)" />
                  </SocialLink>
                </Grid>
                <Grid item>
                  <SocialLink underline="none">
                    <CardMedia component={FacebookOutlined} sx={{ fontSize: 16 }} alt="Facebook icon" />
                  </SocialLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
