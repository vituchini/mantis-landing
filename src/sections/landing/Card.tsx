import { CardContent, Card as MUICard, Typography, styled, useTheme, type CardProps } from '@mui/material';

const Card = ({ children, sx, ...other }: CardProps) => {
  const theme = useTheme();

  return (
    <MUICard
      sx={{
        height: '100%',
        bgcolor: theme.palette.grey[50],
        border: `1px solid ${theme.palette.grey[200]}`,
        boxShadow: 'none',
        borderRadius: 10,
        ...sx
      }}
      {...other}
    >
      <CardContent
        sx={{
          '&, &:last-child': {
            padding: '48px 56px'
          }
        }}
      >
        {children}
      </CardContent>
    </MUICard>
  );
};

const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey.A400,
  fontWeight: 300,
  fontSize: 32,
  lineHeight: 1.2,
  letterSpacing: -1
}));

const CardText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 300,
  fontSize: 16,
  letterSpacing: -1
}));

export { Card, CardText, CardTitle };
