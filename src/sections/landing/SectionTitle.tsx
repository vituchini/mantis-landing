import { Typography, useTheme } from '@mui/material';

const SectionTitle = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: 64,
        fontWeight: 300,
        letterSpacing: -1,
        color: theme.palette.grey.A400
      }}
    >
      {children}
    </Typography>
  );
};

const HighlightedTitleText = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      component="span"
      sx={{
        fontSize: 64,
        fontWeight: 700,
        fontStyle: 'italic',
        letterSpacing: -1,
        color: theme.palette.text.primary
      }}
    >
      {children}
    </Typography>
  );
};

export { SectionTitle, HighlightedTitleText };
