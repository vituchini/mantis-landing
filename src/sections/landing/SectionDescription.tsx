import { Typography, styled } from '@mui/material';

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: 20,
  color: theme.palette.grey[600],
  letterSpacing: -1
}));

export default SectionDescription;
