import { Box, CardMedia, Container, Stack, useTheme } from '@mui/material';
import { Card, CardText, CardTitle } from './Card';

import heroBg from 'assets/images/landing/hero-bg.svg';
import heroShape from 'assets/images/landing/hero-shape.svg';
import heroDecorativeBlock from 'assets/images/landing/hero-decorative-block.jpg';
import SectionDescription from './SectionDescription';
import { HighlightedTitleText, SectionTitle } from './SectionTitle';
import CallToActionButton from 'components/call-to-action-button/CallToActionButton';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box component="section">
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          gap: '40px',
          marginInline: 'auto',
          paddingInline: '20px',
          paddingBlock: '20px 40px',
          maxWidth: 1720,
          borderRadius: 10,

          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '350px 350px 130px 110px',

            '&::after, &::before': {
              content: "''",
              position: 'absolute',
              height: '40px',
              width: '40px',
              backgroundImage: 'radial-gradient(circle at 0 0, transparent 40px, white 40px)'
            },

            '&::after': {
              right: 0,
              bottom: 0,
              gridColumn: '3 / 4',
              gridRow: '1 / 2',
              boxShadow: '0 40px 0 0 white'
            },

            '&::before': {
              right: 0,
              bottom: 0,
              gridColumn: '2 / 3',
              gridRow: '2 / 3',
              boxShadow: '0 40px 0 0 white'
            }
          }
        }}
      >
        <CardMedia
          component="img"
          image={heroBg}
          sx={{
            height: '100%',
            gridColumn: { xs: '1 / 2', lg: '1 / 4' },
            gridRow: { xs: '1 / 2', lg: '1 / 3' },
            borderRadius: 10,
            pointerEvents: 'none'
          }}
        />
        <Container
          maxWidth={'xl'}
          sx={{
            gridColumn: { xs: '1 / 2', lg: '1 / 4' },
            gridRow: { xs: '1 / 2', lg: '1 / 3' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            paddingBlock: 8,
            paddingInline: { xs: '48px', xl: '24px' }
          }}
        >
          <Stack spacing={4} maxWidth={600}>
            <SectionTitle
              sx={{
                fontSize: { xs: 'clamp(32px, 5.5vw, 64px)', md: 70 }
              }}
            >
              Nec tempus justo velit{' '}
              <HighlightedTitleText
                sx={{
                  fontSize: { xs: 'clamp(32px, 5.5vw, 64px)', md: 70 }
                }}
              >
                massa dolor
              </HighlightedTitleText>
              <br /> scelerisque.
            </SectionTitle>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
              rhoncus id et commodo ultricies adipiscing.
            </SectionDescription>
          </Stack>
          <Box mt={6}>
            <CallToActionButton label="Get Started" href="#" variant="contained" />
          </Box>
        </Container>
        <Card
          sx={{
            boxShadow: '0 0 0 40px white',
            gridColumn: { lg: '3 / 4' },
            gridRow: { lg: '2 / 4' },
            height: '100%'
          }}
        >
          <Stack justifyContent="space-between" height="100%">
            <CardMedia
              sx={{
                width: 128,
                height: 128
              }}
              component="img"
              image={heroShape}
            />
            <Box>
              <Stack spacing={2}>
                <CardTitle
                  sx={{
                    fontSize: { xs: 32, lg: 'clamp(20px, 1.5vw, 32px)' }
                  }}
                >
                  Ullamcorper blandit rhoncus
                </CardTitle>
                <CardText
                  sx={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                  rhoncus id et commodo ultricies adipiscing.
                </CardText>
              </Stack>
              <Box mt={2}>
                <CallToActionButton label="Create Task" href="#" variant="outlined" />
              </Box>
            </Box>
          </Stack>
        </Card>
        <Box
          sx={{
            gridColumn: { lg: '3 / 4' },
            height: { xs: 139, lg: '100%' },
            borderRadius: '50px 90px 90px 120px',
            border: `1px solid ${theme.palette.grey[200]}`,
            backgroundImage: `url(${heroDecorativeBlock})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
