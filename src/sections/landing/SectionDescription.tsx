import { Typography, styled, type TypographyProps, type TypographyTypeMap } from '@mui/material';
import { type OverridableComponent } from '@mui/material/OverridableComponent';

const SectionDescription = styled<OverridableComponent<TypographyTypeMap<{}, 'span'>>>((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  fontWeight: 300,
  fontSize: 20,
  color: theme.palette.grey[600],
  letterSpacing: -1
}));

export default SectionDescription;
