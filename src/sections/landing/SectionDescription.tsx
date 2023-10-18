import { Typography, useTheme } from '@mui/material';

const SectionDescription = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        fontWeight: 300,
        fontSize: 20,
        color: theme.palette.grey[600],
        letterSpacing: -1
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionDescription;
