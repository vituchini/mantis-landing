import { Typography, useTheme } from '@mui/material';

const HowItWorksCardNumeration = ({ index }: { index: number }) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        maxWidth: 'fit-content',
        padding: '10px 28px',
        fontSize: 32,
        lineHeight: 1,
        color: theme.palette.grey.A400,
        border: `1px solid ${theme.palette.grey.A400}`,
        borderRadius: '100px'
      }}
      component="span"
    >
      {index}
    </Typography>
  );
};

export default HowItWorksCardNumeration;
