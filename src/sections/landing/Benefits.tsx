import { Box, CardMedia, Container, Grid, Stack } from '@mui/material';
import { HighlightedTitleText, SectionTitle } from './SectionTitle';
import { Card, CardText, CardTitle } from './Card';
import SectionDescription from './SectionDescription';

import shape1 from 'assets/images/benefits/shape-1.svg';
import shape2 from 'assets/images/benefits/shape-2.svg';
import shape3 from 'assets/images/benefits/shape-3.svg';

const BenefitContent = ({ image, title, text }: { image: string; title: string; text: string }) => {
  return (
    <Stack spacing={{ xs: 2, md: 16 }}>
      <CardMedia
        sx={{
          width: 128,
          height: 128
        }}
        component="img"
        image={image}
        alt="Benefit shape"
      />
      <Stack spacing={2}>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Stack>
    </Stack>
  );
};

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
                <SectionTitle
                  sx={{
                    fontSize: 'clamp(40px, 5vw, 64px)'
                  }}
                >
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
                borderBottomLeftRadius: { md: '90px' }
              }}
            >
              <BenefitContent
                image={shape1}
                title="Ullamcorper blandit rhoncus"
                text="Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
                    rhoncus id et commodo ultricies adipiscing."
              />
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <BenefitContent
                image={shape2}
                title="Pretium commodo"
                text="Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
								rhoncus id et commodo ultricies adipiscing."
              />
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                borderBottomLeftRadius: { xs: '90px', md: '40px' },
                borderBottomRightRadius: '90px'
              }}
            >
              <BenefitContent
                image={shape3}
                title="Enim eget eget"
                text="Lorem ipsum dolor sit amet consectetur. Nec tempus justo velit massa dolor scelerisque varius fames. Ullamcorper blandit
								rhoncus id et commodo ultricies adipiscing."
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
