import { Typography, styled, type TypographyProps, type TypographyTypeMap } from '@mui/material';
import { type OverridableComponent } from '@mui/material/OverridableComponent';

const SectionTitle = styled<OverridableComponent<TypographyTypeMap<{}, 'span'>>>((props: TypographyProps) => (
  <Typography variant="h2" {...props} />
))(({ theme }) => ({
  fontSize: 64,
  fontWeight: 300,
  letterSpacing: -1,
  color: theme.palette.grey.A400
}));

const HighlightedTitleText = styled<OverridableComponent<TypographyTypeMap<{}, 'span'>>>((props: TypographyProps) => (
  <Typography variant="h2" component="span" {...props} />
))(({ theme }) => ({
  fontSize: 64,
  fontWeight: 700,
  fontStyle: 'italic',
  letterSpacing: -1,
  color: theme.palette.text.primary
}));

export { HighlightedTitleText, SectionTitle };
