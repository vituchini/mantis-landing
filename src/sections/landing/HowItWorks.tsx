import { Box, Container, Stack, alpha, useMediaQuery, useTheme } from '@mui/material';
import howItWorks from 'assets/images/landing/how-it-works-bg.svg';
import HIWShape1 from 'components/how-it-works/HIWShape1';
import HIWShape2 from 'components/how-it-works/HIWShape2';
import HIWShape3 from 'components/how-it-works/HIWShape3';
import HowItWorksCardNumeration from 'components/how-it-works/HowItWorksCardNumeration';
import { CardText, CardTitle } from './Card';
import SectionDescription from './SectionDescription';
import { HighlightedTitleText, SectionTitle } from './SectionTitle';

const HowItWorks = () => {
  const theme = useTheme();
  const isMediaEqualOrMoreThanXl = useMediaQuery(theme.breakpoints.up('lg'));

  const commonShapeSx = {
    borderRadius: '80px',
    border: `1px solid ${theme.palette.common.white}`,
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  };

  return (
    <Box
      component="section"
      sx={{
        paddingBlock: 8,
        backgroundImage: `url(${howItWorks})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { lg: 'repeat(2, 1fr)' },
            gridTemplateRows: { lg: '300px 55px 55px 300px', xl: '300px 60px 60px 300px' },
            columnGap: 3,

            [theme.breakpoints.down('lg')]: {
              maxWidth: 600,
              marginInline: 'auto',
              rowGap: 3
            }
          }}
        >
          <Box
            sx={{
              gridColumn: { xl: '2 / 3' },
              maxWidth: { xl: 619 },
              justifySelf: { xl: 'end' },
              paddingInline: { xs: '56px', xl: 0 }
            }}
          >
            <SectionTitle
              lineHeight={1}
              sx={{
                fontSize: 'clamp(40px, 4vw, 64px)'
              }}
            >
              How it <HighlightedTitleText>works</HighlightedTitleText>
            </SectionTitle>
            <SectionDescription
              mt={2}
              sx={{
                fontSize: 'clamp(16px, 2.5vw, 20px)'
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Pretium commodo sed purus cursus libero commodo. Neque ac id sed vitae ullamcorper
              elementum facilisis. In nascetur tempus consequat elementum urna purus maecenas mauris. Enim eget eget odio risus malesuada.
            </SectionDescription>
          </Box>
          <Stack
            sx={{
              gridColumn: { lg: '1 / 2' },
              gridRow: { lg: '1 / 2' },
              position: 'relative',
              paddingInline: '56px',
              paddingBottom: { xs: '40px', lg: '10px' },
              paddingTop: '40px',

              '& .hiw-shape': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
              },

              [theme.breakpoints.down('lg')]: commonShapeSx
            }}
          >
            {isMediaEqualOrMoreThanXl && <HIWShape1 />}
            <Stack
              position="relative"
              justifyContent="space-between"
              height="100%"
              sx={{
                gap: { xs: 4, lg: 'unset' }
              }}
            >
              <HowItWorksCardNumeration index={1} />
              <Stack spacing={1}>
                <CardTitle>Ullamcorper blandit rhoncus</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                  rhoncus id et commodo ultricies adipiscing.
                </CardText>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              gridColumn: { lg: '1 / 2' },
              gridRow: { lg: '3 / 5' },
              position: 'relative',
              paddingInline: '56px',
              paddingBottom: { xs: '40px', lg: '30px', xl: '40px' },
              paddingTop: { xs: '40px', lg: '90px', xl: '70px' },

              '& .hiw-shape': {
                position: 'absolute',
                width: '100%',
                left: 0,
                bottom: 0
              },

              [theme.breakpoints.down('lg')]: commonShapeSx
            }}
          >
            {isMediaEqualOrMoreThanXl && <HIWShape2 />}
            <Stack
              position="relative"
              justifyContent="space-between"
              height="100%"
              sx={{
                gap: { xs: 4, lg: 'unset' }
              }}
            >
              <HowItWorksCardNumeration index={2} />
              <Stack spacing={1}>
                <CardTitle>Nec tempus justo velit massa dolor scelerisque</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                  rhoncus id et commodo ultricies adipiscing.
                </CardText>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              gridColumn: { lg: '2 / 3' },
              gridRow: { lg: '2 / 5' },
              position: 'relative',
              paddingInline: '56px',
              paddingBottom: { xs: '40px', lg: '30px', xl: '40px' },
              paddingTop: { xs: '40px', lg: '100px', xl: '80px' },

              '& .hiw-shape': {
                position: 'absolute',
                width: '100%',
                left: 0,
                bottom: 0
              },

              [theme.breakpoints.down('lg')]: commonShapeSx
            }}
          >
            {isMediaEqualOrMoreThanXl && <HIWShape3 />}
            <Stack
              sx={{
                position: 'relative',
                justifyContent: 'space-between',
                height: '100%',
                gap: { xs: 4, lg: 'unset' }
              }}
            >
              <HowItWorksCardNumeration index={3} />
              <Stack spacing={1}>
                <CardTitle>Pretium commodo sed purus </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                  rhoncus id et commodo ultricies adipiscing.
                </CardText>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
