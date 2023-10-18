import { Box, CardMedia, Container, Grid, Stack } from '@mui/material';
import { HighlightedTitleText, SectionTitle } from './SectionTitle';
import { Card, CardText, CardTitle } from './Card';
import SectionDescription from './SectionDescription';

import shape1 from 'assets/images/benefits/shape-1.svg';
import shape2 from 'assets/images/benefits/shape-2.svg';
import shape3 from 'assets/images/benefits/shape-3.svg';

const Benefits = () => {
  return (
    <Box component="section" bgcolor="white" py={8}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card
              sx={{
                borderTopLeftRadius: '90px',
                borderTopRightRadius: '90px'
              }}
            >
              <Stack spacing={4} maxWidth={748}>
                <SectionTitle>
                  Our <HighlightedTitleText>benefits</HighlightedTitleText>
                </SectionTitle>
                <SectionDescription>
                  Lorem ipsum dolor sit amet consectetur. Pretium commodo sed purus cursus libero commodo. Neque ac id sed vitae ullamcorper
                  elementum facilisis. In nascetur tempus consequat elementum urna purus maecenas mauris. Enim eget eget odio risus
                  malesuada.
                </SectionDescription>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                borderBottomLeftRadius: '90px'
              }}
            >
              <Stack spacing={16}>
                <CardMedia
                  sx={{
                    width: 128,
                    height: 128
                  }}
                  component="img"
                  image={shape1}
                />
                <Stack spacing={2}>
                  <CardTitle>Ullamcorper blandit rhoncus</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                    rhoncus id et commodo ultricies adipiscing.
                  </CardText>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <Stack spacing={16}>
                <CardMedia
                  sx={{
                    width: 128,
                    height: 128
                  }}
                  component="img"
                  image={shape2}
                />
                <Stack spacing={2}>
                  <CardTitle>Pretium commodo</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                    rhoncus id et commodo ultricies adipiscing.
                  </CardText>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                borderBottomRightRadius: '90px'
              }}
            >
              <Stack spacing={16}>
                <CardMedia
                  sx={{
                    width: 128,
                    height: 128
                  }}
                  component="img"
                  image={shape3}
                />
                <Stack spacing={2}>
                  <CardTitle>Enim eget eget</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                    rhoncus id et commodo ultricies adipiscing.
                  </CardText>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
