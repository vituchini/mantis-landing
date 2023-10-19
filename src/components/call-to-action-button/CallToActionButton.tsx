import { Link, Typography, useTheme } from '@mui/material';
import ButtonDefaultContainedShape from './ButtonDefaultContainedShape';
import ButtonSmallContainedShape from './ButtonSmallContainedShape';
import ButtonDefaultOutlinedShape from './ButtonDefaultOutlinedShape';

const MAIN_COLOR = '#1890FF';

type CallToActionButtonProps = {
  label: string;
  href: string;
  variant: 'contained' | 'outlined';
  size?: 'small' | 'default';
};

const CallToActionButton = ({ label, href, size = 'default', variant }: CallToActionButtonProps) => {
  const theme = useTheme();

  const hasSmallSize = size === 'small';

  return (
    <Link
      href={href}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        width: hasSmallSize ? 164 : 259,
        height: hasSmallSize ? 40 : 56,
        padding: hasSmallSize ? '8px 16px' : '16px 24px',
        color: variant === 'contained' ? theme.palette.common.white : MAIN_COLOR,
        cursor: 'pointer',
        transition: theme.transitions.create('color'),

        '& .button-shape': {
          position: 'absolute',
          inset: 0,
          color: MAIN_COLOR,
          transition: theme.transitions.create('color')
        },

        '&:hover': {
          color: variant === 'outlined' ? theme.palette.primary.main : theme.palette.common.white
        },

        '&:hover .button-shape': {
          color: theme.palette.primary.main
        }
      }}
      underline="none"
    >
      <Typography
        component="span"
        sx={{
          zIndex: 1,
          fontSize: hasSmallSize ? 16 : 24
        }}
      >
        {label}
      </Typography>
      {size === 'default' && variant === 'contained' && <ButtonDefaultContainedShape />}
      {size === 'small' && variant === 'contained' && <ButtonSmallContainedShape />}
      {size === 'default' && variant === 'outlined' && <ButtonDefaultOutlinedShape />}
    </Link>
  );
};

export default CallToActionButton;
