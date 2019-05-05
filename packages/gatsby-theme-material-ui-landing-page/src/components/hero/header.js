import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header({ children, className }) {
  return (
    <Typography
      color="inherit"
      align="center"
      variant="h1"
      className={className}
    >
      {children}
    </Typography>
  );
}
